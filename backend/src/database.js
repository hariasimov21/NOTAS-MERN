const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI  
            : 'mongodb://localhost/databasetest' ;

mongoose.connect(uri, {
    /**con esto mongodb se coencta */
    useNewUrlParser: true,
    useCreateIndex:true
});

const conection = mongoose.connection;

conection.once('open', () => {
    console.log("database is connected".rainbow.bgWhite);
});