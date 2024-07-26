/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let countT = new Map();
    let window = new Map();
    let [l, r] = [0, 0];
    for(let s of t){
        countT.set(s, (countT.get(s) || 0) + 1);
    }
    
    let [have, need] = [0, countT.size];
    res = [-1, -1]; minLen = Number.MAX_VALUE;
    while(r !== s.length){
        char = s[r];
        window.set(char, (window.get(char) || 0) + 1);
        if(countT.has(char) && (window.get(char) === countT.get(char))){
            have++;
        }
        while(have === need){
            if((r - l + 1) < minLen){
                res = [l, r];
                minLen = (r - l + 1);
            }
            window.set(s[l], window.get(s[l]) - 1);
            if(countT.has(s[l]) && (window.get(s[l]) < countT.get(s[l]))){
                have--;
            }
            l++;
        }
        r++;
    }
    [l, r] = res;
    return (minLen ===Number.MAX_VALUE) ? "" : s.slice(l, r + 1) 
};

