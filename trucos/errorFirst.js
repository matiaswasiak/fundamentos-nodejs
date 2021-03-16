function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 1000);
}

asincrona((err, dato) => {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    // throw err; // NO VA A FUNCIONAR
    return false;
  }

  console.log("todo ha ido bien, mi data es", dato);
});
