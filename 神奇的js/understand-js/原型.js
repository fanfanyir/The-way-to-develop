function My (name){
  this.name = name;
}

My.prototype.con = function (who){
  console.log(this.name)
}

var a = new My("a");
var b = new My("b");

a.con("c");
b.con();