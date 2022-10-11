str = "Javascript i nije tolko los";
function PolaStringa(str) {
  var arr = str.split(str);
  for (let i of arr) {
    console.log(i);
  }
}

PolaStringa(str);
