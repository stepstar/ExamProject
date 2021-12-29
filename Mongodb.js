const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910123');
const schema = {
    shop_id: String,
    good_id: String,
    number: Number,
    
}

const Shop = mongoose.model('shop_sale', schema);
const kitty = new Shop({ shop_id:'test01',good_id:'test01',number:100 });
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
