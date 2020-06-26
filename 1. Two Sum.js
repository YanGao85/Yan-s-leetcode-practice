/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for(let i = 0; i < nums.length; i++){
  //     for(let j = i+1; j< nums.length; j++){
  //         if(nums[i]+nums[j]===target) return [i, j]
  //     }
  // }
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hash[diff] !== undefined) return [i, hash[diff]];
    else hash[nums[i]] = i;
  }
};
