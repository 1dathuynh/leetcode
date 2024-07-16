/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let [l, r] = [0, 1];
   res = 0;
   if(prices.length < 2){
    return 0;
   }
   while(r !== prices.length){
    if(prices[r] < prices[l]){
        l = r;
        r++;
    }
    else{
        res = Math.max(res, (prices[r] - prices[l]));
        r++;
    }
   }
   return res;
};
