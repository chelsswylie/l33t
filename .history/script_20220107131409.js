// Given a roman numeral, convert it to an integer

const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

console.log(I + V);

const theOrder = () => {
  let x = 0;
  switch (x) {
    case 0:
      I = 1;
      break;
    case 1:
      V = 5;
      break;
    case 2:
      X = 10;
      break;
    case 3:
      L = 50;
      break;
    case 4:
      C = 100;
      break;
    case 5:
      D = 500;
      break;
    case 6:
      M = 1000;
      break;
  }
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {};
