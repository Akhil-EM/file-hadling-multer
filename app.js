const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;

const app = express();
//set multer options
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        const {originalname} = file;
        cb(null,`${uuid()}-${originalname}`);
    }
})
const upload = multer({storage});

app.use(express.static('public'));

// upload.single() for single file
// upload.array() for multipple files
app.post("/upload",upload.array("avatar"),function(req,res){
    
    // res.json({status:"OK"});
    res.redirect("/index.html");
})

app.listen(3000,()=>console.log("application is now running"));