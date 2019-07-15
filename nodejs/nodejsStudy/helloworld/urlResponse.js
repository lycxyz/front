var http = require('http')
var server = http.createServer()
server.on('request',(req,res)=>{
  console.log('收到客户端发送的请求了,请求路径是:'+req.url);
  let url = req.url;
  if(url==='/login'){
    res.end('Login page')
  }else if(url==='/register'){
    res.end('Register page')
  }else if(url==='/logout'){
    res.end('logout page')
  }

  // res.end()
  // 注意响应内容只能是二进制数据或者字符串，不可为数组，对象
  // 因此使用JSON.stringify() 
})
server.listen(3000,function(){
  console.log('服务器启动成功了,可以通过http://localhost:3000访问了')
})