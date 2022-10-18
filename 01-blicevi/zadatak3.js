var broj = (x) => {
  var brojevi = [];
  var stringovi = [];

  for (let i of x) {
    console.log(i);
    if (typeof i === "number") {
      brojevi.push(i);
    } else {
      stringovi.push(i);
    }
  }
};

console.log(brojevi);
console.log(stringovi);
