import fs from 'fs'

console.log("------------------------------------------------------")
console.log("Modo Asincrónico con Promises (Sintaxis then catch).")
console.log("------------------------------------------------------")

const asincronicoConPromisesThenCatch = function(ruta = "./package.json") {
    let info = {}
    fs.promises.readFile(ruta, 'utf-8')
        .then(archivo => {
            info.contenidoObj = JSON.parse(archivo)
            info.contenidoStr = archivo
            return fs.promises.stat(ruta)
        })
        .then(stats => {
            info.size = stats.size
            console.log(info)
            return fs.promises.writeFile('info.txt',JSON.stringify(info, null,'\t'))
        })
        .catch(error => console.log(`Error procesando el archivo, mensaje de error: ${error.message}`)) 
}

asincronicoConPromisesThenCatch()