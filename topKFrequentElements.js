/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let result = [];
    map = new Map();
    for(num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }
    //
    let sortByValue;
    sortByValue = [...map].sort((a,b) => b[1] - a[1]);
    console.log(sortByValue);
    for(let i = 0; i < k; i++){
        result.push(sortByValue[i][0])
    }
    return result;
 }


 
