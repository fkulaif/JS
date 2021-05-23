function squareDigits(num) {
  num = num.toString();
  let arrNum = Array.from(num);
  var res = [];
  var i;
  for (i = 0; i < arrNum.length; i++) {
    res[i] = arrNum[i] ** 2;
  }
  res = res.toString();
  res = res.replaceAll(",", "");
  return Number(res);
}
