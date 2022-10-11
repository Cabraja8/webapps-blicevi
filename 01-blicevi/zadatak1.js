prvi = [{ 1: "A" }, { 1: "C", 2: "A" }, { 1: "A" }];

function ArrayVrati(prvi) {
  for (let i of prvi) {
    for (let p = 0; p <= prvi.length; p++) {
      console.log(i);
    }
  }
}
ArrayVrati(prvi);
