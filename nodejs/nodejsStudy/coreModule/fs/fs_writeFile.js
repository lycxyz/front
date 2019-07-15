const fs = require('fs');
fs.writeFile('./text','This is a text',{encoding:'utf8'},err=>{
  if(err) throw err;
  console.log('done!');
})