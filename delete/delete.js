const express = require('express')
let mongodb = require('mongodb')
let mcl = mongodb.MongoClient
let router = express.Router()
let url = require("../url")
//create rest api
router.post("/",(req,res)=>{
    var id = req.body.id
    var obj = {
        "id":id
    }
    mcl.connect(url,(err,connection)=>{
        if(err)
        {
            console.log("Error in connection :-",err)
        }
        else
        {
            let db = connection.db("nodedb")
            db.collection(tbl_product).deleteOne(obj,(err)=>{
                if(err)
                {
                    res.json({'delete':'failed'})
                }
                else
                {
                    console.log("Data deleted")
                    res.json({'delete':'success'})
                }
            })
        }
    })
})
module.exports = router