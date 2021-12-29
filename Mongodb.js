const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910123');
const userSchema = {
    id: String,
    username: String,
    password: String,
    super: Boolean
  }
var User = mongoose.model('User', userSchema);

const kitty = new User({ id:'005', username:'user03', password:'user03',super:true });
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
