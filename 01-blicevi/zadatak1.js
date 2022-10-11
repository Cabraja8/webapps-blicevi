prvi = [{ 1: "A" }, { 1: "C", 2: "A" }, { 1: "A" }];

function ArrayVrati(prvi) {
  for (let i of prvi) {
    if (Object.keys(i).length == Object.keys(i).length)
      console.log(Object.keys(i).length);
  }
}
ArrayVrati(prvi);
