const argv = require("yargs")
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: "Es la base de la tabla de multiplicar"
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: "Lista los resultado en pantalla"

        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: "Dice hasta donde quiere la tabla"

        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base debe de ser un numero";
        }
        if (isNaN(argv.h)) {
            throw "el maximo debe de ser un numero";
        }
        return true;
    }).argv;

module.exports = argv;