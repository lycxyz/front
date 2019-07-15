const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

//仅仅执行一次的函数
ce.once('test',()=>{
	console.log('test event')
});
setInterval(()=>{
	ce.emit('test')
},500);
