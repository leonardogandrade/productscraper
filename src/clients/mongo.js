const mongoose = require('mongoose');

const mongoConnect = () => {
    try{
        mongoose.connect(process.env.MONGO);
    }catch(err){
        console.log(`error while startiong mongo - ${err}`)
    }
}

const mongoDisconnect = ( done ) => {
    try{
        mongoose.disconnect(done);
    }catch(err){
        console.log(`error while startiong mongo - ${err}`)
    }
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};