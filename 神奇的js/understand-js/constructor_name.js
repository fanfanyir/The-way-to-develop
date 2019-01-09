// var Foo = {};
// var a1 = Object.create( Foo );
// console.log('a1:',a1);

// Object.defineProperty( Foo, "constructor", {
//   enumerable: false,
//   value: function Gotcha(){}
// });

// console.log("a1",a1);

// "原型"面向对象风格
// function Foo(who) {
//   this.me = who;
// }
// Foo.prototype.identify = function(){
//   return "I am " + this.me;
// }
// function Bar(who){
//   Foo.call(this, who);
// }
// Bar.prototype = Object.create( Foo.prototype );

// Bar.prototype.speak = function() {
//   console.log("Hello, " + this.identify() + ".");
// }
// var b1 = new Bar("b1");
// var b2 = new Bar("b2");

// b1.speak()
// b2.speak()


// 对象关联风格
Foo = {
  init: function(who){
    this.me = who;
  },
  identify: function(){
    return "I am " + this.me;
  }
}

Bar = Object.create( Foo );

Bar.speak = function() {
  console.log("Hello, " + this.identify() + ".");
}
var b1 = Object.create( Bar );
b1.init("b1");
var b2 = Object.create( Bar );
b2.init("b2");

b1.speak()
b2.speak()