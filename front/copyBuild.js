const fs = require("fs-extra");
const path = require("path");

const source = path.join(__dirname,'build');
const destination = path.join(__dirname,'../build/public');

fs.copy(source, destination,(err) => {
    if (err){
        console.log('Error copian build a carpeta publica del back', err);
        return console.error(err)
    }
    console.log('Copia completa')
});
