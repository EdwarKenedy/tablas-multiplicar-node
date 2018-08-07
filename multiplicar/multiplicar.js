const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) && !Number(limite)) {
      return reject(`El valor introducido ${base} no es un número`);
    } else {
      console.log('================'.green);
      console.log(`tabla de ${base}`.green);
      console.log('================'.green);
      let data = '';
      for (let index = 1; index <= limite; index++) {
        data += `${base} * ${index} = ${index * base} \n`;
      }
      resolve(console.log(data));
    }
  });
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`El valor introducido ${base} no es un número`);
    }
    let data = '';
    for (let index = 1; index <= limite; index++) {
      data += `${base} * ${index} = ${index * base} \n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
};
