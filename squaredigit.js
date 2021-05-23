console.log(squareDigits(331));
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val ** 2;
      })
      .join("")
  );
}
