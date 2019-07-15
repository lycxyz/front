// 仅指定大小
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
// 指定大小和值
console.log(Buffer.alloc(5,1));
// 更像随机生成的
console.log(Buffer.allocUnsafe(5,1));
// 根据数组来生成
console.log(Buffer.from([1,3,5,7,9,2,4,6,8,10]));
// 根据字符串来生成
console.log(Buffer.from('hello'));
// 根据字符串并且指定编码格式来生成
console.log(Buffer.from('hello','base64'));

// 常用的buffer方法
// Buffer.byteLength,BUffer.isBuffer(),Buffer.concat()
// 测试英文   ----4
console.log(Buffer.byteLength('test'))
// 测试中文   ----6
console.log(Buffer.byteLength('测试'))
console.log(Buffer.byteLength('测试'))

//判断一个对象是不是buffer
console.log(Buffer.isBuffer({}))  //fasle
console.log(Buffer.isBuffer(Buffer.from([1,2,3])))  //true

const buf1 = Buffer.from('This')
const buf2 = Buffer.from('is')
const buf3 = Buffer.from('a')
const buf4 = Buffer.from('test')
const buf5 = Buffer.from('buffer')
const buf6 = Buffer.from('!')
const buf = Buffer.concat([buf1,buf2,buf3,buf4,buf5,buf6]);
console.log(buf);  //<Buffer 54 68 69 73 69 73 61 74 65 73 74 62 75 66 66 65 72 21>
console.log(buf.toString()); //Thisisatestbuffer!

// fill
const bufx = Buffer.allocUnsafe(10)
console.log(bufx);
console.log(bufx.fill(10, 2, 6));  //表示从第三个开始填充，到底七个填充结束

// equals判断两个buffer内容是不是一样
const bufX = Buffer.from('test');
const bufY = Buffer.from('test');
const bufZ = Buffer.from('test!');

console.log(bufZ.equals(bufY));  //false
console.log(bufX.equals(bufY));  //true

// indexOf,lastIndexOf

// 中文乱码问题
const bufferString = Buffer.from('中文字符串！');
// for(let i=0; i<bufferString.length; i=i+5){
//   const b = bufferString.allocUnsafe(5);
//   buf.copy(b,0,i);
//   console.log(b.toString());
// }