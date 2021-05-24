"use strict";
const temperatures = [50, 40, 30, "error", 61, 10];
console.log(temperatures[0]);

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// }
// calcTempAmplitude(temperatures);
// calcTempAmplitude([50, 40, 30]);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calcTempAmplitude(temperatures);
// calcTempAmplitude([34, 43]);
