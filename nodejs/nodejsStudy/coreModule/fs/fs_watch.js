const fs = require('fs')

fs.watch('./',{recursive:true},(eventType,filename)=>{
  console.log("事件类型是:"+ eventType);
  console.log("文件名是:"+ filename);
})

// alias