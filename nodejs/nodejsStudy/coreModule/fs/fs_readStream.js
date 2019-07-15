// 有方向的，从一个文件流向另一个文件
// 数据
const fs = require('fs')
const rs = fs.createReadStream('./fs_readStream.js');
rs.pipe(process.stdout);
// 将当前文件读出来了

