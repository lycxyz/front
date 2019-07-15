const fs = require('fs')
fs.stat('./fs_stat.js',(err,stats)=>{
  // if(err) throw err;
  if(err) {
    console.log("文件不存在!");
    return;
  } 
  console.log("是文件嘛?" + stats.isFile());  //是否是文件
  console.log("是文件夹嘛?" + stats.isDirectory());  //是否是文件夹
  console.log(stats);
})
