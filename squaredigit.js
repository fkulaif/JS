let num = 3212; // let num = [3, 2, 1, 2];
console.log(num);

num = num.toString(); //parse needed for Array.from
console.log(num);
let arrNum = Array.from(num);
console.log(typeof arrNum); //object
console.log(arrNum);

console.log(squareDigits(num)); //NaN while an object

function squareDigits(arrNum) {
  let res = [];
  var i;
  for (i = 0; i < arrNum.length; i++) {
    res[i] = arrNum[i] ** 2; //object
  }
  res = res.toString();
  res = res.replaceAll(",", "");
  return Number(res);
  // function toArray(num) {
  //   //   return [...num];
  // }
  // console.log(toArray(1234));
}

// console.log(num.length);
// console.log(num[0]);
// console.log(num[2] ** 2);
// res = num[2] ** 2;
// res[0] = num[1]; //2
// res[0] = num[2] ** 2;
// console.log(res[0]);
// console.log(res.toString());
