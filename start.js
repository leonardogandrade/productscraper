const server = require('./server');
const { mongoConnect } = require('./src/clients/mongo');
//Models
require('./src/models/product-model');

//Connect to database
mongoConnect();

try{
    server.listen(process.env.PORT || 3009);
    console.log(`server is listening on port ${process.env.PORT}`);
}catch(err){
    console.error(`error while trying to start server - ${err}`)
}