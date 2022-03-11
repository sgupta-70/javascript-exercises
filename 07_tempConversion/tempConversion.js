const ftoc = function (fah) {
  let cel = (fah - 32) * (5 / 9);
  return Math.round(cel * 10) / 10;
};

const ctof = function (cel) {
  let fah = (9 * cel) / 5 + 32;
  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
