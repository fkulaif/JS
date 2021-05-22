let hasDriverLicense = false;
let isSober = false;
let driver = prompt("Do you have a Valid Driver's License? (y or n): ");
if (driver.toLowerCase() === "y") hasDriverLicense = true;
let drink = "";

if (hasDriverLicense) {
  drink = prompt("Are you sober? (y or n): ");
  if (drink.toLowerCase() === "y") isSober = true;
  if (isSober) console.log("Can drive");
  else console.log("Cannot drive");
} else console.log("Cannot drive");
