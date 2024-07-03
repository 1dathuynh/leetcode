/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    newS = s.split("").sort();
    newT = t.split("").sort();
    console.log(newS, newT);
 };


 isAnagram("nagaram", "anagram")

