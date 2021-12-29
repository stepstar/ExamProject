const express = require('express');
const ejs = require('ejs');
const app = express();
app.use(express.static('public'));

app.use('/index', (req, res) => {
  ejs.renderFile('public/index.html',function (err, str) {
    //str => 输出渲染后的字符串
    if (err) console.log(err);
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(str);
    }
  });

});

app.use('/main', (req, res) => {
  ejs.renderFile('public/main.html',function (err, str) {
    //str => 输出渲染后的字符串
    if (err) console.log(err);
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(str);
    }
  });

});

app.post('/input', (req, res) => {
  //操作form-data
  console.log(req);
  res.send("666");
});

app.listen(60123);