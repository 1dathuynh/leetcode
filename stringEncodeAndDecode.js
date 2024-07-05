class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        res = "";
        for(str of strs){
            res += toString(length(str)) + "#" + strs;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        i = 0;
        res = [];
        while(i < str.length){
            j = i;
            while(str[j] !== "#"){
                j++;
            }
            length = parseInt(str.slice(i, j));
            res.push(str.slice(j, j + length))

        }
        return res;
    }
}


Solution Solution;
console.log(Solution.encode([["neet","code","love","you"]]));