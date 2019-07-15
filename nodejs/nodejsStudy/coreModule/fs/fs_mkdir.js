const fs = require('fs');
fs.mkdir('test',err=>{
  if(err) throw err
  console.log("文件目录创建完毕！");
})