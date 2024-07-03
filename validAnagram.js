/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    newS = s.split("").sort();
    newT = t.split("").sort();
    // tao hai mang moi de sort

    return newS.join("") === newT.join("");

    // O(n*log(n))
 };
