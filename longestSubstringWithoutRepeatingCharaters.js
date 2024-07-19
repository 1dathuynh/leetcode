/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let [l, r] = [0, 0];
    let res = 0;
    set = new Set();
    while(r !== s.length){
         while(set.has(s[r])){
             set.delete(s[l]);
             l++;
         }
         set.add(s[r]);
         res = Math.max(res, set.size);
         r++;
    }
    return res;
 };
 
 