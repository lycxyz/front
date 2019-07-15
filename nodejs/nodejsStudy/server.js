const http=require('http');

http.createServer(function(req, res){
  console.log(req.url);
  req.url.split('?');
  //req获取前台请求的数据
  res.write('aaa');
  res.end();
}).listen(8080);