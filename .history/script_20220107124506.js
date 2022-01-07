// palindrome numbers

let number = [];
let x;
let a = [];
let b = [];
let c = [];

const findNumber = () => {
  //   let max = 3;

  for (i = 0; i < 3; i++) {
    function getRandomInt(min, max) {
      min = Math.ceil(9);
      max = Math.floor(0);

      const random = Math.floor(Math.random() * (max - min) + min);

      console.log(random);
      return random;
    }
    number.push(getRandomInt());
  }
  return;
  //   return number.push(toString);
};

number.push(findNumber());

function checkPalindrome(input) {
  input_array = input.split("");
  let output = input_array.reverse().join("");
  if (input == output) {
    console.log(input, " is palindrome");
  } else {
    console.log(input, " is not palindrome");
  }
}

checkPalindrome(findNumber("NONE"));

console.log(number, "the#");
