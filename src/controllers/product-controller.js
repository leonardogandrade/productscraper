const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const axios = require('axios');
const path = require('path');
const { timeDifference } = require('../utils/compare');
const { saraivaScrapper, casasbahiaScrapper, zattiniScrapper } = require('../utils/scraper');
const timeIntervalToScrap = 2;

const info = (req, res) => {
    return res.sendFile(path.join(__dirname,'../view/info.html'));
}

const storeProduct = async ( payload ) => {
    try{
        return await Product.create(payload);
    }catch(err){
        console.log(err)
    }
    return 0;
}

const updateProduct = async ( url ) => {
    try{
        const updatedProduct = await scrapProduct(url);
        return await Product.findOneAndReplace({url}, updatedProduct, {new: true});
    }catch(err){
        console.log(err);
    }
    return 0;
}

const fetchData = async ( url ) => {
    try {
      const instance = axios.create();
      const { data } = await instance.get(url, {
        timeout: 2000
      });
      return data;
    } catch(err) {
      console.error(`ERROR: An error occurred while trying to fetch the URL: ${url}`);
      return err;
    }
  };

const scrapProduct = async (url) => {
    const urlParts = url.split('.')
    const company = urlParts[1];
    let payload = '';

    const html = await fetchData(url, company);

    switch(company){
        case "saraiva":
            payload = saraivaScrapper(html, url);
            break;
        case "casasbahia":
            payload = casasbahiaScrapper(html, url);
            break;
        case "zattini":
            payload = zattiniScrapper(html, url);
            break;            
    }
    
    return payload;
} 

const getProductInfo = async (req, res) => {
    const url = req.query.url;
    const resultDb = await Product.findOne({url: url}).exec();

    if(resultDb){
        const presetTime = Date.now();
        const pastTime = resultDb.createdAt;
        const deltaT = timeDifference(pastTime, presetTime, "min");

        //Verify either 60 minutes has passed from the last request for the same request or not.
        if(deltaT < timeIntervalToScrap ){
            //Return from Db cause it spent less than 60 minutes.
            console.log('db');
            return res.status(200).json(resultDb);
        }else{
            //Update Db because passed more than 60 minutes
            const result = await updateProduct(url);
            return res.status(200).json(result);
        }
        
    }else{
        console.log('scrap');
        const productScraped = await scrapProduct(url);
        console.log(productScraped);
        if(productScraped.title !== undefined && productScraped.price !== undefined){
            await storeProduct(productScraped);
            return res.status(200).json(productScraped);
        }
        return res.status(404).json({"msg": "Error while retrieving data from URL."})
    }
}

module.exports = {
    info,
    storeProduct,
    scrapProduct,
    getProductInfo
}