process.on("beforeExit", () => {
  console.log("Matias, el proceso esta por terminar");
});

process.on("exit", () => {
  console.log("Matias, el proceso acabó");
});

process.on("uncaughtException", (err, origen) => {
  console.error("Se nos olvido capturar un error");
  console.error(err);
});

functionNotExist();

console.log("Esto si el error no se recoje, no sale");
