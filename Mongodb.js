const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910123');
const shopSchema = {
    id: String,
    name: String,
    website: String
}
var Shop = mongoose.model('Shop', shopSchema);

const kitty = new Shop({ id:'001', name:'GXG官方旗舰店', website:'https://shop62224542.taobao.com/?spm=a230r.7195193.1997079397.2.290954a12KUsIX' });
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
