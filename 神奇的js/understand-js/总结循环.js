/*
总结：

遍历数组元素：for(), forEach(), map(), for ... of

循环对象属性：for ... in


*/

const arr =  ['a','b','c','d','e','f'];
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

// for()
// 遍历数组
//遍历值为数组元素索引
for(let i=0,len = arr.length; i < len; i++){
  console.log(i);         // 0 1 2 3 4 5 
  console.log(arr[i]);    // a b c d e f
}

// forEach()
// 遍历数组
// 三个参数: (数组元素, 数组元素索引, 数组本身)  第三个参数可选
// 无返回值
arr.forEach((item, index) => {
  console.log(index);         // 0 1 2 3 4 5 
  console.log(item);          // a b c d e f
})

// Array 方法: map(),every(),some(),filter(),reduce(),reduceRight()
// map()
// 遍历数组
// 三个参数: (数组元素, 数组元素索引, 数组本身)  第三个参数可选
// 返回一个新数组
let arrData = arr.map((item, index) => {
  console.log(item);        // a b c d e f
  console.log(index);       // 0 1 2 3 4 5
  return item;
})
console.log(arrData);       // ["a","b","c","d","e","f"]


// for ... in
// 遍历对象和数组，更适用于循环对象
// 会遍历出自定义属性，原型链上可枚举的所有属性，且属性顺序不固定

// 用于对象，循环值为对象属性
for(let key in obj){
  if(obj.hasOwnProperty(key)){
    console.log(key);       // a b c d 
    console.log(obj[key]);  // 1 2 3 4
  }
}
// 用于数组，值为数组索引
for(let index in arr){
  console.log(index);       // 0 1 2 3 4 5 
  console.log(arr[index]);  // a b c d e f
}
arr.name = '自定义属性';
for(let index in arr){
  console.log(index);       // 0 1 2 3 4 5 name
  console.log(arr[index]);  // a b c d e f
}

// for ... of
// 遍历对象和数组，更适用于循环数组

// 用于数组，值为数组元素
for(let value of arr){
  console.log(value);       // a b c d e f
}

// 用于对象，须配合 Object.keys() 一起使用，直接用于循环对象会报错
// 循环值为对象属性
for(let value of Object.keys(obj)){
  console.log(value);       // a b c d 
}


