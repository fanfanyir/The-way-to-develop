// Promise 调度机巧
var p3 = new Promise(function(resolve,reject){resolve("B")})
var p2 = new Promise(function(resolve,reject){resolve("A")})
var p1 = new Promise(function(resolve,reject){resolve(p3)})


p1.then(function(v){console.log(v)})
p2.then(function(v){console.log(v)})

// 不应该依赖于不同 Promise 间回调的顺序和调度。好的编码实践方案根本不会让多个回调的顺序有丝毫影响，可能的话就要避免。

// 回调未调用