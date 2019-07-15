var http = require('http')
var server = http.createServer()
// request请求事件处理函数，需要接受两个参数:
  // request请求对象，该对象可以用来获取客户端的一些请求信息，比如请求路径
  // response响应对象，响应对象可以用来给客户端发送响应信息
server.on('request',(request,response)=>{
  console.log('收到客户端发送的请求了,请求路径是:'+request.url);
  // response 对象有一个方法，write可以用来给客户端发送响应数据，但是最后一定要用end来结束响应，否则客户端会一直等待
  response.write('hello');
  // 告诉客户端，我的话说完了，你可以呈递给用户看了
  response.end();
})
server.listen(3000,function(){
  console.log('服务器启动成功了,可以通过http://localhost:3000访问了')
})