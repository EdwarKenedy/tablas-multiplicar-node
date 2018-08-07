// const multiplicar = require('./multiplicar/multiplicar');
// multiplicar.crearArchivo();

// destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

// let argv2 = process.argv;
// console.log(argv);

let comando = argv._[0];

switch (comando) {
case 'listar':
  listarTabla(argv.base, argv.limite);
  break;
case 'crear':
  crearArchivo(argv.base, argv.limite)
    .then(archivo => {
      console.log(`Archivo creado: ${archivo.green}`);
    })
    .catch(err => console.log(err));
  break;
default:
  console.log('Comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];
