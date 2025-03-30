/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
	let left = 1, right = Math.max(...piles)
	while(left < right){
		let mid = Math.floor((left + right) / 2);
		let time = 0;
		for(let i = 0; i < piles.length; i++){
			time += Math.ceil(piles[i] / mid);
		}
		if(time > h){
			left = mid + 1;
		}
		else{
			right = mid;
		}				
	};
	return right;
};