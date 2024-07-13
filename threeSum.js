/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    res = [];
    nums.sort((a,b) => a - b)
    for(let i = 0; i < nums.length - 2; i++){
     if(i > 0 && nums[i] === nums[i - 1]){
       continue;
     }
     let [l, r] = [i + 1, nums.length - 1];
     while(l < r){
       sum = nums[i] + nums[l] + nums[r];
       if(sum > 0){
         --r;
       }
       else if(sum < 0){
         ++l;
       }
       else{
         res.push([nums[i], nums[l], nums[r]]);
         while(l < r && nums[l] === nums[l + 1]){
           l++;
         }
         l++;
       }
     }
    }
    return res;
   };
   
   