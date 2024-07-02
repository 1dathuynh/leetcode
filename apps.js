/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    hashTable = new Map();
    let res = [];
    for(str of strs){
        signarute = getSignature(str);
        if(!hashTable.has(signarute)){
            hashTable.set(signarute, []);
        }     
        hashTable.get(signarute).push(str);
    
    }
    hashTable.forEach(item => {
        res.push(item);
    });
    return res;
    

};

var getSignature = (str) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const result = Array(26).fill(0);
    for(c of str){
        // duyet qua tung ky tuc 
        index = alphabet.indexOf(c);
        if(result[index] !== -1){
            result[index]++;
        }
        
    }
    const sig = [];
    
    for(let i = 0; i < 26; i++){
        if(result[i] !== 0){
            sig.push(String.fromCharCode(i + "a".charCodeAt(0)), result[i].toString());

        }
    }
    return sig.join('');

}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
