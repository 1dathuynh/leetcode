/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
};

var getSignature(string){
    // dem tan suat ky tu trong chuoi
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const result = Array(26).fill(0);
    // 1  mang co 26 phan tu
    for(c of string){
        let index = alphabet.indexOf(c);
        if(index !== -1){
            result[index]++;
        }
    }
    console.log(result);
}

getSignature("anagram")