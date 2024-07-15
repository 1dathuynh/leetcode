/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [l, r] = [0, height.length - 1];
    maxL = height[l], maxR = height[r];
    res = 0;
    while(l < r){
        if(height[l] <= height[r]){
            l++;
            maxL = Math.max(maxL, height[l]);
            res += MaxL - height[l]; 
        }
        else{
            r--;
            maxR = Math.max(maxR, height[r]);
            res += maxR - height[r];
        }
    }
    return res;

};