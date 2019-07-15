// var a = 12,b = 13; 
//=>这样写法b是带var的
// var c = d = 11; 
//=>这样写d是不带var的

console.log(a, b);
var a = 12, b=12;
function fn(){
  console.log(a,b);
  var a = b =13;  // var a =13; b=13
  console.log(a,b);
}
fn();
console.log(a,b);