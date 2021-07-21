  
const path = require('path');

module.exports = {
    //generar el codigo de vue transpilado a vanilla js en una carpeta llamada public, para asuntos de produccion
    outputDir: path.resolve(__dirname,'../public'),
    //manera sencilla de referirse a http://localhost:3000, para asuntos de consumo de la api
    devServer:{
        proxy:{
            '/api':{
                target: 'http://localhost:3000'
            }
        }
    }
}