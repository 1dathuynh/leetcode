// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     s = s.toLowerCase();
//     newS = "";
//     for(c of s){
//      if((c.charCodeAt() >= 97 && c.charCodeAt() <= 122) || (c.charCodeAt() >= 48 && c.charCodeAt() <= 57)){
//        newS += c;
//      }
//     }
//     l = 0;
//     r = newS.length - 1;
//     console.log(newS);
//     while(l <= r){
//      if(newS[l] !== newS[r]){
//        return false;
//      }
//      else{
//        ++l;
//        --r;
//      }
//     }
//     return true;
     
//  };
// Time : O(n)
// Space : O(n)
/* -----------------------------------------------------------------------*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    while(l < r){
        while(l < r && !validChar(s[l])){
            l+=1;
        }
        while(r > l && !validChar(s[r])){
            r-=1;
        }
        if(s[l].toLowerCase != s[r].toLowerCase){
            return false;
        }
        l+=1;
        r-=1;
    }
    return true;
};
var validChar = (c) => {
    return (c.charCodeAt() >= 97 && c.charCodeAt() <= 122) ||
           (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) ||
           (c.charCodeAt() >= 48 && c.charCodeAt() <= 57);

}

// time O(n)
// space o(1)


 