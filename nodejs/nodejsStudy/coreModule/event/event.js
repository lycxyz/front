const EventEmitter = require('events');
// EventEmitter
class CustomEvent extends EventEmitter {

}
const ce = new CustomEvent();
ce.on('test', () =>{
  console.log('this is a test');
})

setInterval(() => {
  ce.emit('test');
},2000);