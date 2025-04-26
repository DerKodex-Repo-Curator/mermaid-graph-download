const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();
const PORT = 3023;
const BACKEND_URL = parseInt(process.env.BACKEND_URL || 'http://localhost:3022');;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'src')));

// 代理/render请求到后端
app.post('/render', proxy(BACKEND_URL, {
  proxyReqPathResolver: () => '/render'
}));

// 默认路由返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`前端服务器运行在 http://localhost:${PORT}`);
});
