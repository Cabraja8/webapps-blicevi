prvi = [{ 1: "A" }, { 1: "C", 2: "A" }, { 1: "A" }];

function ArrayVrati(prvi) {
  for (let i of prvi) {
    if (Object.keys(i).length === 1) console.log(i);
  }
}
ArrayVrati(prvi);
