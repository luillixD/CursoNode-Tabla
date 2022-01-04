const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path/posix');
const crearArchivo = (numero = 5, listar, hasta) => {

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${numero} * ${i} = ${numero * i}\n`;
    }
    if (listar) {
        console.log('================='.green);
        console.log(`Tabla del ${numero}`.gray);
        console.log('================='.green);
        console.log(salida.cyan.italic);
    }

    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
    (salida !== '') ? resolve('Corercto'): reject('Error al crear');
}
const resultado = async(numero, listar, hasta) => {
    try {
        const resultado = await crearArchivo(numero, listar, hasta);
        return `Archivo correcto`;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    resultado
}