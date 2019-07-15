const fs = require('fs')
fs.unlink('./ttt.js',err=>{
  if(err) throw err
  console.log('delete file successfully!');
})