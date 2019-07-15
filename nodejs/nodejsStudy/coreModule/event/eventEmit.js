var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
}
util.inherits(Person,events.EventEmitter);
var xiaoming = new Person('xiaoming');
var lili = new Person('lili');
var lucy = new Person('lucy');
var person = [xiaoming,lili,lucy];
person.forEach(item=>{
  item.on('speak',function(message){
    console.log(item.name+" said:"+message);
  })
})
xiaoming.emit('speak','hi,xiaoming');
lili.emit('speak','hi,lili')
lucy.emit('speak','hi,lucy')
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(message){
//   console.log(message);
// })

myEmitter.emit('someEvent','hello luyuchen');