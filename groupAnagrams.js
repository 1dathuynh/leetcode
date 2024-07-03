/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    map = new Map();
    for(str of strs){
        let signature = getSignature(str);
        if(!map.has(signature)){
            map.set(signature, []);
        }     
         map.get(signature).push(str);
    }
    // do value cua map ra ket qua
    let result = [];
    map.forEach(value => {
        result.push(value);
    });
    return result;
    
};

var getSignature = (string) => {
    // dem tan suat ky tu trong chuoi
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const arr = Array(26).fill(0);
    // 1  mang co 26 phan tu
    for(c of string){
        let index = alphabet.indexOf(c);
        if(index !== -1){
            arr[index]++;
        }
    }
    //create signature

    const result = [];
    for(let i = 0; i < 26; i++){
        if(arr[i] !== 0){
            result.push(String.fromCharCode(i + "a".charCodeAt(0)), arr[i].toString());

        }
    }
    return result.join("");
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])