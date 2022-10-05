import fs, { fstat } from 'fs'

console.log("------------------------------------------------------")
console.log("Modo Asincrónico con Promises (Sintaxis async await).")
console.log("------------------------------------------------------")

const asincronicoConPromisesAsyncAwait = async function(ruta = "./package.json") {
    try {
        let archivo = await fs.promises.readFile(ruta, 'utf-8')
        let stats = await fs.promises.stat(ruta)
        let info = {
            contenidoStr: archivo,
            contenidoObj: JSON.parse(archivo),
            size: stats.size
        }
        await fs.promises.writeFile("./info.txt", JSON.stringify(info, null, '\t'))
        console.log(info);
    }
    catch(error) {
        console.log(`Error procesando el archivo, mensaje de error: ${error.message}`);
    } 
}

asincronicoConPromisesAsyncAwait()