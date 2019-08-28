const express=require("express");
var pool=require('../pool.js');
let router=express.Router();

router.get('/register',(req,res)=>{
    var uid=req.query.uid;
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="INSERT INTO HYMHS_user(uid,uname,upwd) VALUES(?,?,?)";
    if(err) throw err;
    if(result.affecteRow==0){
        res.json({
            code:-1,msg:"注册失败"
        });
    }else{
        res.json({code:1,msg:"注册成功"

        })
    }
});
module.exports=router;