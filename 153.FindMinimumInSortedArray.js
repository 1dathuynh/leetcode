/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
	let [l, r] = [0, nums.length - 1];
	while(l < r){
		let m = Math.floor((l + r) / 2);
		if(nums[m] > nums[r]){
			l = m + 1;
		}
		else{
			r = m;
		}
	}
	return nums[r];
};