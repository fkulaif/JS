// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(200,10));
// const num = Number(prompt("What's your favorite number:?"));

// if (num === 1) console.log(num);
// console.log(typeof num);
// if (num !== 1) console.log(num + " num is not 1");
// else console.log("num is 1");
// let hasDriverLicense = false;
// let isSober = false;
// hasDriverLicense = Boolean(prompt("Do you have a Valid Driver's License:?"));
// isSober = Boolean(prompt("Are you sober:?"));

// let hasDriverLicense = false;
// let isSober = false;
hasDriverLicense = prompt("Do you have a Valid Driver's License? (y or n): ");
//if (driver === "y") hasDriverLicense = true;

// if (hasDriverLicense) {
if (hasDriverLicense === "y") {
  isSober = prompt("Are you sober? (y or n): ");
  if (isSober === "y") console.log("Can drive");
  else console.log("Cannot drive");
} else console.log("Cannot drive");
