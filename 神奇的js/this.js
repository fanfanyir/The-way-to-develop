// function foo(){
//   console.log(this.a, this)
// }
// function doFoo(fn){
//   console.log(fn,"fn", this)
//   fn()
// }
// var obj = {
//   a:2,
//   foo: foo
// }

// var a = "oop";
// doFoo(obj.foo)

function foo(sth){
  this.a = sth;
}
var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);
var baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);