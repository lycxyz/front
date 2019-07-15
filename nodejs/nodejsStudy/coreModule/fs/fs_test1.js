const fs = require('fs');
// 所有的方法都有异步和同步的形式，异步方法最后一个参数都是一个回调函数。传给回调函数的参数取决于具体方法，
// 但回调函数的第一个参数都会保留给异常。如果操作成功完成，则第一个参数会是null或undefined
fs.readFile('./fs_test1.js',(err,data)=>{
  if(err) throw err  //一旦文件不存在或者路径有问题，就会将异常抛出来
  console.log(data); //此时打印出的是二进制数据（Buffer）
  console.log(data.toString()); //将二进制数据转换为字符串格式
})
  // 另外一种方式就是在readFile的第二个参数使用字符串编码格式'utf8',起到的效果是相同的
// fs.readFile('./fs_test1.js','utf8',(err,data)=>{
//   if(err) throw err
//   console.log(data); //此时打印出的是二进制数据（Buffer）
//   console.log(data.toString()); //将二进制数据转换为字符串格式
// })

//尽管同步的写在后面，但是同步的执行完才会执行异步的。 
const data = fs.readFileSync('./01.js','utf8');
console.log(data);
