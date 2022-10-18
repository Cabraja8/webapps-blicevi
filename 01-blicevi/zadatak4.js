x = { 1: [143, "A", 21], 2: ["B"], 3: [12, 11, "C"] };

function dict(x) {
  for (let i in x) {
    if (Array.isArray(x[i])) {
      var sum = 0;
      for (let j of x[i]) {
        if (typeof j === "number") {
          sum += j;
        } else {
        }
      }
    }
  }
}

dict(x);
