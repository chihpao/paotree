// app.js
const express = require('express');
const app = express();
const port = 3123;

// 設置EJS作為模板引擎
app.set('view engine', 'ejs');

// 靜態檔案夾
app.use(express.static('public'));

// 路由
app.get('/', (req, res) => {
  const links = [
    { url: 'https://github.com', icon: 'github.png', text: 'GitHub' },
    { url: 'https://twitter.com', icon: 'twitter.png', text: 'Twitter' },
    // 添加更多連結
  ];
  res.render('index', { links });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});