/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    map = new Map();
    if(s.length < 1){
        return 0;
    }
    let [l, r] = [0, 0];
    res = 0;
    while(r !== s.length){
        map.set((s[r]), (map.get(s[r]) || 0) + 1);

        while(((r - l + 1) - Math.max(...[...map.values()])) > k){
            map.set(s[l], (map.get(s[l]) - 1));
            l++
        }
        res = Math.max((r - l + 1), res);
        r++;
    }
    return res;
};