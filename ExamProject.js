const express = require('express');
const ejs = require('ejs');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910123');
const userSchema = {
  id: String,
  username: String,
  password: String,
  super: Boolean
}
const goodSchema = {
  id: String,
  name: String,
  price: Number,
  sta: Boolean
}
var User = mongoose.model('User', userSchema);
var Good = mongoose.model('Good', goodSchema);

//index --> login page
app.use('/index', function (req, res) {
  ejs.renderFile('public/index.html', {result:''}, function (err, str) {
    if (err) console.log(err);
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(str);
    }
  });
});

//登陆处理路由
var username = '', password = '';
app.post('/input', function(req, res, next) {
  //1.读取表单form-data
  username = req.body.username;
  password = req.body.password;
  next();
});
app.post('/input', function(req, res, next) {
  //2.数据库查询，登陆成功
  User.find({'username':username},(err,user)=>{
    if(user){
      if(password==user[0].password){//success
        var admin = '普通管理员';
        if(user[0].super) admin = '超级管理员';
        ejs.renderFile('public/main.html', 
          {username: username, admin: admin}, function (err, str) {
          //str => 输出渲染后的字符串
          if (err) console.log(err);
          else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(str);
          }
        });
      }else{//failed
        next();
      }
    }else{//failed
      next();
    }
  })
});
app.post('/input', function(req, res, next) {
  //3.登陆失败，返回
  ejs.renderFile('public/index.html',
  {result:'username or password is incorrect'},function (err, str) {
    if (err) console.log(err);
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(str);
    }
  });
});

//数据处理路由
app.use('/getGoodsData',function(req,res){
  Good.find({ }, (err, good)=>{
    /* console.log(good); */
    res.send(JSON.stringify(good)) ;
    });
   
});

app.listen(60123);