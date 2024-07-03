/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    mySet = new Set();
    //tao doi tuong set de kiem tra
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

