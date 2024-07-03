/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    mySet = new Set();
    for(num of nums){
        if(!mySet.has(num)){
            mySet.add(num)
        }
        else{
            return true;
        }
    }
    return false;
};

