const cheerio = require('cheerio');

const saraivaScrapper = ( html, url ) => {
    const $ = cheerio.load(html);

    let price = $("meta[itemprop='price']").attr("content");
    let title = $("meta[name='Abstract']").attr("content");
    let description = $("meta[name='description']").attr("content");
    let currency = $("meta[name='currency']").attr("content");
    let image = $('img').attr("src");

    const payload = {
        title, description, currency, price, image, url
    }

    return payload;
}

const casasbahiaScrapper = ( html, url ) => {
    const $ = cheerio.load(html);

    let price = $(".css-ri4n10.eym5xli0").find('p').text();
    let title = $("meta[name='title']").attr("content"); 
    let description = $("meta[name='description']").attr("content"); 
    let currency = $("meta[name='currency']").attr("content"); 
    let image = $('.magnify-container img').attr("src"); 

    const payload = {
        title, description, currency, price, image, url
    }

    return payload;
}

const zattiniScrapper = ( html, url ) => {
    const $ = cheerio.load(html);
    let value = $(".default-price span strong").text();
    let price = value.split(' ')[1];
    let title = $("meta[property='og:title']").attr("content");
    let description = $("meta[name='description']").attr("content");
    let currency =  value.split(' ')[0];
    let image = $("meta[property='og:image']").attr("content");

    const payload = {
        title, description, currency, price, image, url
    }

    return payload;
}

module.exports = {
    saraivaScrapper,
    casasbahiaScrapper,
    zattiniScrapper,
}