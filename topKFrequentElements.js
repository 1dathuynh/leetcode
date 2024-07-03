/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    map = new Map();
    for(num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    let sortByValue;
    sortByValue = [...map].sort((a,b) => b[1] - a[1]);
    console.log(sortByValue);
 }
 topKFrequent([0,2,3,1,2,1,2])

 
