// __dirname当前模块的目录名
console.log(__dirname);
// 利用path模块也可以得到相同的效果，打印出当前模块的目录名
var path = require('path')
console.log(path.dirname(__filename));

console.log('当前模块的目录名为:' + __dirname)
console.log('当前文件的绝对路径为:' + __filename)

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发事件');
});
myEmitter.emit('event');
// emit函数方法可以传递任意数量的参数到监听器函数。
// 当监听器函数被调用时， this 关键词会被指向监听器所绑定的 EventEmitter 实例。
