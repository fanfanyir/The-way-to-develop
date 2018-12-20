function foo(){
  console.log(this.a, this)
}
function doFoo(fn){
  console.log(fn,"fn", this)
  fn()
}
var obj = {
  a:2,
  foo: foo
}

var a = "oop";
doFoo(obj.foo)