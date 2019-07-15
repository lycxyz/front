const fs = require('fs');
fs.rmdir('./test2',err=>{
  if(err) throw err;
  console.log("文件夹删除完毕！");
})