/* 
  条件判断
  在当前作用域下，不管条件是否成立都要进行变量提升
  带var的还是只是声明
  带function的在老版本浏览器的渲染机制下，声明+定义都处理，但是为了迎合es6中的块级作用域，新版浏览器对于函数（在条件判断中的函数），不管条件是否成立，都只是先声明，没有定义，类似于var
*/
console.log(a); //undefined，变量提升，a声明但是未赋值
// if(1===2){
//   var a = 12;
// }
/*
  var a; =>在全局作用域下声明的全局变量也相当于给win设置了一个属性window.a = undefined
*/
if('a' in window){
  var a = 200;
}
console.log(a); //undefined,因为条件不成立，直接跳转到11行执行

