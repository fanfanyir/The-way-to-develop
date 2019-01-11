// // 用js实现

// // 父类
// function Widget(width, height) {
//   this.width = width || 50;
//   this.height = height || 50;
//   this.$elem = null;
// }

// Widget.prototype.render = function($where){
//   if(this.$elem){
//     this.$elem.css({
//       width: this.width + 'px',
//       height: this.height + 'px',
//     }).appendTo($where);
//   }
// };

// // 子类
// function Button(width, height, label){
//   Widget.call(this, width, height);
//   this.label = label || 'Default';

//   this.$elem = $("<button>").text(this.label);
// }

// Button.prototype = Object.create(Widget.prototype);

// Button.prototype.render = function($where){
//   Widget.prototype.render.call(this, $where);
//   this.$elem.click(this.onClick.bind(this));
// };

// Button.prototype.onClick = function(evt) {
//   console.log("Button'"+this.label+"'clicked!");
// };

// $(document).ready(function(){
//   var $body = $(document.body);
//   var btn1 = new Button(125, 30, "Hello");
//   var btn2 = new Button(150, 40, "world");

//   btn1.render($body);
//   btn2.render($body);
// })


// ES6 的 class 语法糖
class Widget {
  constructor(width, height){
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
  render($where){
    if(this.$elem){
      this.$elem.css({
        width: this.width + "px",
        height: this.height + "px",
      }).appendTo($where);
    }
  }
}

class Button extends Widget {
  constructor(width, height, label){
    super(width, height);
    this.label = label || "Default";
    this.$elem = $("<button>").text(this.label);
  }
  render($where){
    super.render($where);
    this.$elem.click(this.onClick.bind(this));
  }
  onClick(evt){
    console.log("Button'" + this.label + "'clicked!");
  }
}

$(document).ready(function(){
  var $body = $(document.body);
  var btn1 = new Button( 125, 30, "Hello");
  var btn2 = new Button( 150, 40, "World");

  btn1.render($body);
  btn2.render($body);
})