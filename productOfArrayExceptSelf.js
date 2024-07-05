        /**
         * @param {number[]} nums
         * @return {number[]}
         */

        // Cách tiếp cận 1: Brute Force
        // var productExceptSelf = function(nums) {
        //     res = [];
        //     for(let i = 0; i < nums.length; i++){
        //         let product = 1;
        //         for(let j = 0; j < nums.length; j++){
        //             if(i !== j){
        //                 product *= nums[j];
        //             }
        //         }
        //         if(product == -0){
        //             res.push(0);
        //         }
        //         else
        //             res.push(product);
                
        //     }
        //     return res;
        // Nhược điểm : Quá chậm, O(n * n)
        // };
        /*==============================================*/
        // Cách tiếp cận 2: Chia tích của mảng với số
    
        // var productExceptSelf = function(nums) {
        //     res = [];
        //     product = 1;
        //     for(let i = 0; i < nums.length; i++){
        //         product *= nums[i];
        //     }
        //     for(let i = 0; i < nums.length; i++){
        //         res[i] = product/nums[i];
        //     }
        //     return res;

        // };
        
        // Nhược điểm của phương pháp này là không thể chia cho các số trong mảng ban đầu là 0
        /*==============================================*/
        //Cách tiếp cận 3: Sử dụng mảng tiền tố, hậu tố.
        // var productExceptSelf = function(nums) {
        //     pre = Array(nums.length).fill(0);
        //     suf = Array(nums.length).fill(0);
        //     res = [];
        //     n = nums.length;
        //     pre[0] = 1;
        //     suf[n - 1] = 1;

        //     for(let i = 1; i < n; i++){
        //         pre[i] = pre[i - 1] * nums[i - 1];
        //     }
        //     for(let i = n - 2; i >= 0; i--){
        //         suf[i] = suf[i + 1] * nums[i + 1];
        //     }
        //     for(let i = 0; i < n; i++){
        //         res[i] = pre[i] * suf[i];
        //     }
        //     return res;
        // };

        /*==============================================*/
        //Cách tiếp cận 4: Lưu trực tiếp tích tiền tố và hậu tố vào mảng res

        var productExceptSelf = function(nums) {
            res = Array(nums.length).fill(1);
            n = nums.length;
            prefix = 1;
            for(let i = 0; i < n; i++){
                res[i] = prefix;
                prefix *= nums[i];
            }
            suffix = 1;
            for(let i = n - 1; i >= 0; i--){
                res[i] = suffix * res[i];
                suffix *= nums[i]
            }
            return res;
        };

       console.log(productExceptSelf([1,2,3,4]));