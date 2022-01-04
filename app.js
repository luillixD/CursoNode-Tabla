const { resultado } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// console.log(numero);

resultado(argv.b, argv.l, argv.h)
    .then(() => console.log('TODO BIEN!'))
    .catch(err => console.log('TODO MAL!'));