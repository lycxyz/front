// 使用node构建一个服务器
// 核心模块http

// 加载http模块
var http = require('http')
// 使用http.createServer方法创建一个server实例并返回给server变量
var server = http.createServer();
// 服务器要干嘛？
// 提供对数据的服务 发请求 接受请求 处理请求 给反馈（发送响应） 

//  注册request请求事件，当客户端请求过来会自动触发服务器的request请求事件，然后执行第二个参数，就是回掉函数
server.on('request',function(){
  console.log('受到客户端的请求了');
})

// 启动服务器,启动服务器
server.listen(3000,function(){
  console.log('服务器启动成功了,可以通过http://localhost:3000访问了')
})
