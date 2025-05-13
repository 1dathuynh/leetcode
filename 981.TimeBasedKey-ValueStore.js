
var TimeMap = function() {
    this.store = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.store[key]){
			this.store[key] = [];
		}
		this.store[key].push({value: value, timestamp: timestamp})
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
	if(!this.store[key]){
		return ""
	}
	for(const entry of this.store[key]){
		if(entry.timestamp === timestamp){
			return entry.value
		}
	}
	let arr = this.store[key]
	let [l, r] = [0, arr.length - 1]
	let res = ""
	while(l <= r){
		let m = Math.floor((l + r) / 2);
		if(arr[m].timestamp === timestamp){
			return arr[m].value;
		}
		if(arr[m].timestamp < timestamp){
			res = arr[m].value;
			l = m + 1;
		}
		if(arr[m].timestamp > timestamp){
			r = m - 1;
		}
	}
	return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */