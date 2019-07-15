const EventEmitter = require('events');
// EventEmitter
class CustomEvent extends EventEmitter {

}
const ce = new CustomEvent();
ce.on('test', () =>{
  console.log('this is a test');
})
ce.on('error',err=>{
  console.log(err);
})
ce.emit('error',new Error('oops!'));
// setInterval(() => {
//   ce.emit('test');
// },2000);