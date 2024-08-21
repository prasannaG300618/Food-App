let express = require('express')
var route = express.Router();
let path = require('path')
let app = express();
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set("views",path.join(__dirname,'/views'))
app.set(JSON)
app.use(express.urlencoded({ extended: true }));

route.post('/',(req,res)=>{
res.render('./admin/home');
})


module.exports = route;