/** importamos las variables de entorno del archivo .env */
require('dotenv').config();
let colors = require('colors')

const app = require("./app");
require('./database');

async function main ()  {
    await app.listen(app.get('port'));
        console.log(`server on port ${app.get('port')} :3`.rainbow.bgWhite);
    

}

main();
