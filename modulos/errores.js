function seRompe() {
  return 3 + z;
}

try {
  seRompe();
} catch (err) {
  console.error("Vaya, algo se ha roto...");
  console.error(err.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("esto de aqui está al final");
