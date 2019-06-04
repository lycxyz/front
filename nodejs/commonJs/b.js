// const { add,mul }= require('./a');
const opts = require('./a');
const _ = require('lodash')
const sum = opts.add(1,3);
const multiple = opts.mul(5.1,20);
const arr = _.concat([1,2],multiple,sum,123);
console.log(sum);
console.log(multiple);
console.log('arr...',arr);