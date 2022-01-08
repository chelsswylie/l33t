// Given a roman numeral, convert it to an integer
let romNumOrder = new Array();
romNumOrder[0] = {
  name: "I",
  value: 1,
};
romNumOrder[1] = {
  name: "V",
  value: 5,
};
romNumOrder[2] = {
  name: "X",
  value: 10,
};
romNumOrder[3] = {
  name: "L",
  value: 50,
};
romNumOrder[4] = {
  name: "C",
  value: 100,
};
romNumOrder[5] = {
  name: "D",
  value: 500,
};
romNumOrder[6] = {
  name: "M",
  value: 1000,
};

console.log(romNumOrder);

let I = new Array();
let X = new Array();
let C = new Array();

if (value === 4 || value === 9) {
  console.log(name);
}

// charAt() function will be useful
// https://www.w3schools.com/jsref/jsref_charat.asp

// conditionals/rules
// if/else/else if statements likely good here
// need new arrays for each of these conditions
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {};
