if(1 === 1){
  console.log(fn);  //函数本身：当条件成立，进入到判断体内（在es6中他是一个块级作用域）第一件事并不是代码执行，而是类似于变量提升一样，先把fn生命和定义了。
  // 因此在判断体中代码执行打印前，fn已经被定义且赋值了
  function fn() {
    console.log('ok');
  }
  
}