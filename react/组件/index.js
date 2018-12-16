// // var arr = [], n = 8;
// // function backtrack(k) {
// //     if(k > n) {
// //         console.log(arr);
// //     } else {
// //         for(var i = 1;i <= n; i++) {
// //             arr[k-1] = i;
// //             if(check2(arr, k-1)) {
// //                 backtrack(k + 1);
// //             }
// //         }
// //     }
// // }
// // function check2(arr, n) {
// //     for(var i = 0; i <= n - 1; i++) {
// //         if((Math.abs(arr[i] - arr[n]) == n - i) || (arr[i] == arr[n])) {
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // backtrack(1);
// var twoSum = function(nums, target) {
//     var arr = []
//     nums.forEach(function(item,index){
//         for(let i = index+1;i<nums.length;i++){
//             if(Number(item)+Number(nums[i]) == target){
//                 arr = [index, i];
//             }
//         }
//     })
//     return arr
// }

// var nums = [2,7,11,15],target = 9;
// console.log(twoSum(nums,target));

// var sum = 0;
// for(let i = 0;i < 23;i++){
//     sum += i;
// }
// console.log(sum)

var obj = {
    a: 1,
    b: 2
}
var newObj = {
    a: 1,
    b: 2
}
console.log(JSON.stringify(obj) === JSON.stringify(newObj))
console.log(Object.is(obj,newObj))