/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    newS = s.split("").sort();
    newT = t.split("").sort();
    // O(n*log(n))
    return newS.join("") === newT.join("");
 };



