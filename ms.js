import fs from 'fs'

console.log("------------------------------------------")
console.log("Modo Sincrónico")
console.log("------------------------------------------")

const sincronico = function(ruta = "./package.json") {
    try {
        let archivo = fs.readFileSync(ruta, 'utf-8')
        const {size} = fs.statSync("./package.json");
        let info = {
            contenidoStr: archivo,
            contenidoObj: JSON.parse(archivo),
            size: size
        }
        fs.writeFileSync("./info.txt", JSON.stringify(info, null, '\t'))
        console.log(info)
    }
    catch(error) {
        console.log(`Error procesando el archivo, mensaje de error: ${error.message}`);
    }
    
}

sincronico()