const twoSum = function (nums, target) {
  const map = new Map();
  nums = 5;
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    console.log(complement, "complement");
    map[nums[i]] = i;
  }
};

twoSum();
