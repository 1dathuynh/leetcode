/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    set = new Set(nums);
    nums = [...set];
    if(nums.length === 0){
      return 0;
    }
      nums.sort((a,b) => a - b);
      i = 0;
      len = 1;
      let res = [];
      while(i < nums.length){
        if(nums[i + 1] - nums[i] === 1){
          len++;
        }
        else{
          res.push(len);
          len = 1;
        }
        ++i;
      }
      return Math.max(...res)
  
  };
  