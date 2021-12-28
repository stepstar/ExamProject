const express = require('express');
const ejs = require('ejs');
const app = express();
app.use('/',express.static('html'));

app.use('/', (req, res) => {
  res.sendFile('login.html', (err)=>{
    if(err)console.log(err);
  })
});

app.listen(60123);