const fs = require('fs')

// let a =() => {
//   ()=>{
//     ()=>{
//       ()=>{

//       }
//     }
//   }
// }


const promisify = require('util').promisify;
const read = promisify(fs.readFile);
// 方式一
// read('./fs_回调地狱.js').then(data =>{
//   console.log(data.toString());
// }).catch(ex=>{
//   console.log(ex);
// })
// 方式二
async function test(){
  try {
    const content = await read('./fs_回调地狱.js');
    console.log(content.toString());
  } catch (error) {
    console.log(error);
  }
  
}
test();