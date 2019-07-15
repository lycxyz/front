const fs = require('fs')
// 读取父级目录下所有的文件
// fs.readdir('../', (err,files)=>{
//   if(err) throw err
//   console.log("父级目录下所有的文件:"+files);
// })
fs.readdir('./', (err,files)=>{
  if(err) throw err
  console.log("同级目录下所有的文件:"+files);
})