// let num = [3, 2, 1, 2];
let num = 3212;
num = num.toString();
console.log(Array.from(num));

// function toArray(num) {
//   //   return [...num];
//   return Array.from(num);
// }
// console.log(toArray(1234));

// let strSplit = num.split(",");
// var res = str.split(',');

let res = [];

// console.log(num.length);
//console.log(num[0]);
// console.log(num[2] ** 2);
// res = num[2] ** 2;
// res[0] = num[1]; //2
// res[0] = num[2] ** 2;
// console.log(res[0]);
// console.log(res.toString());
console.log(squareDigits(num));

function squareDigits(num) {
  var i;
  for (i = 0; i < num.length; i++) {
    res[i] = num[i] ** 2;
    // text += cars[i] + "<br>";
  }
  res = res.toString(); //1,4,9
  var j;
  for (j = 0; j < res.length; j++) {
    res = res.replace(",", "");
  }
  return Number(res);
}
