const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910123');
const noticeSchema = {
    id: String,
    title: String,
    content: String,
    date: String
  }
var Notice = mongoose.model('Notice', noticeSchema);

const kitty = new Notice({ id:'001', title:'this is title', content:'this is content',date: '2021-12-30' });
kitty.save().then(() => console.log(kitty));



/* 
app.get("/input",(req,res)=>{
    res.send(req.query);
    console.log(req.query);
    const kitty = new Cat({ name: req.query.first, health:req.query.second });
    kitty.save();
    ejs.renderFile("/html/result.html",{returnVal:"success"},(err,str)=>{
        res.send(str);
    });
});
 */
