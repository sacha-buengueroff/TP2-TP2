import fs from 'fs'

console.log("------------------------------------------")
console.log("Modo Asincrónico con Callbacks")
console.log("------------------------------------------")

const aincronicoConCallbacks = function(ruta = "./package.json") {
    fs.readFile(ruta, (error, archivo) => {
        if(error) throw new Error(`Error leyendo el archivo, mensaje de error: ${error.message}`)
        fs.stat(ruta, (error, stats) => {
            if(error) throw new Error(`Error leyendo el archivo, mensaje de error: ${error.message}`)
            let info = {
                contenidoStr: archivo.toString(),
                contenidoObj: JSON.parse(archivo),
                size: stats.size
            }
            fs.writeFile('info.txt',JSON.stringify(info, null,'\t'),(error) => {
                if(error) throw new Error(`Error escribiendo el archivo, mensaje de error: ${error.message}`)
                console.log(info)
            })
        })
    })
}

aincronicoConCallbacks()