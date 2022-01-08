const arr = [1, 5, 7, 4, 15, 24, 7, 5, 1];
const isPalindrome = (arr) => {
  const { length: l } = arr;
  const mid = Math.floor(l / 2);
  //   this part is looping until the array is size n/2
  for (let i = 0; i <= mid; i++) {
    if (arr[i] !== arr[l - i - 1]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(arr));
