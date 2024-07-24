/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    map1 = new Map();
    map2 = new Map();
    size = s1.length;
    length = s2.length;
    if(size > length){
        return false;
    }
    for(let i = 0; i < size; i++){
        map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
    }
    for(let i = 0; i < size; i++){
        map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
    }
    if(compareMap(map1, map2)){
        return true;
    }
    for(let i = size; i < length; i++){
        currentChar = s2[i];
        map2.set(currentChar, (map2.get(currentChar) || 0) + 1);
        startChar = s2[i - size];
        if(map2.get(startChar) === 1){
            map2.delete(startChar);
        }
        else{
            map2.set(startChar, (map2.get(startChar) - 1));
        }
        if(compareMap(map1, map2)){
            return true;
        }
    }
    return false;


};

compareMap = (map1, map2) => {
    if(map1.size !== map2.size){
        return false;
    }
    for(let [key, value] of map1){
        if(map2.get(key) !== value){
            return false;
        }
    }
    return true;
}