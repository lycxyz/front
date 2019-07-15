/*
  变量提升：
    var fn  =>只对等号左边进行变量提升
    sum = AAAFFF111; 声明和定义全部执行

*/

sum();  //变量提升，可以执行
fn();  //输出typeError，fn is not a function.


// 匿名行数之函数表达式
var fn = function(){
  console.log(1);  
};  //代码执行到此处会把函数值赋值给fn

// fn();
// => 普通的函数
function sum(){
  console.log(2);
}

// 推荐使用函数表达式类型的函数定义，普通函数定义可能会造成一定的bug