function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback();
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
hola("Matias", function () {
  adios("Matias", function () {
    console.log("Terminando proceso...");
  });
});

// hola("Matias", function () {});
// adios("Matias", function () {});
