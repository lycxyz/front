var a = 12;
var b = a;
b = 13;
console.log(a);

var sum = () => {
  var total = null;
  for(var i = 0; i < arguments.length; i++){
    var item = arguments[i];
    item = parseFloat(item);
    !isNaN(item) ? total += item : null;
  }
  return total;
}