function fn(){
  // var a =12;
  // 没有变量提升
  console.log(b); //b 没有被定义
  b = 13;
  console.log('b' in window);  //true 在作用域查找的过程中，如果找到win也没有这个变量，相当于给win设置了一个属性B(window.b=13)
  // console.log(a,b);
  console.log(b);  //13
}
fn();
console.log(b);  //13