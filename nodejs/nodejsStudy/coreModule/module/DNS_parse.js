var http = require('http'),dns = require('dns'),fs = require('fs'),url = require('url'), querystring = require('querystring');

http.createServer(function(req,res,pathname){
  var pathname = url.parse(req.url).pathname; //获取当前请求资源的url路径
  console.log(pathname);
  console.log(req);
  console.log(res);
  req.setEncoding('utf8'); //设置返回客户端页面的数据格式，若不设置可能会发生乱码
  res.writeHead(200,{'Content-type':'text/html'});  //添加http响应的头信息
  router(res,req,pathname); //处理不同url请求资源，分发处理

}).listen(3000,'127.0.0.1');  //监听IP与监听端口
console.log('Server running at http://127.0.0.1:3000/');

function router(res,req,pathname)
{
  switch(pathname){
    case "/parse":     //一旦请求路径是/parse时，则执行解析dns域名解析
      parseDns(res,req)
    break;
    default:           //其他情况显示index.html页面
      goIndex(res, req)
  }
}
let goIndex = (res,req) => {
    // 读取index.html的文件路径
    var readPath = __dirname + '/' + url.parse(req.url).pathname;
    // 同步获取index.html文件的信息，保存在indexPage中
    var indexPage = fs.readFileSync(readPath);
    // 返回
    res.end(indexPage);
}
let parseDns = (res,req) => {
  var postData = "";
  req.addListener("data", function(){
    var retData = getDns(postData,function(domain,address){
      res.writeHead(200, {'Content-type':'text/html' });
      // res.end("<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>DNS查询</title></head><div style="text-align:center">Domain:<span style="color:red">"
      // +domain< +/span></div></html>')
    })
  }) 
}