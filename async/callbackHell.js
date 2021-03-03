function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback();
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso...");
hola("Matias", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});

// hola("Matias", function () {
//   hablar(function () {
//     hablar(function () {
//       adios("Matias", function () {
//         console.log("Terminando proceso...");
//       });
//     });
//   });
// });
