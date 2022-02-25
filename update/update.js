const express = require('express')
let mongodb = require('mongodb')
let mcl = mongodb.MongoClient
let router = express.Router()
let url = require("../url")
//create rest api
router.post("/",(req,res)=>{
    let id = req.body.id
    let productName = req.body.productName
    let productDescription = req.body.productDescription
    let productCategory = req.body.productCategory
    let productPrice = req.body.productPrice
    
    let obj = {
        "productName":productName,
        "productDescription":productDescription,
        "productCategory":productCategory,
        "productPrice":productPrice
    }
    mcl.connect(url,(err,connection)=>{
        if(err)
        {
            console.log("Error in connection -:",err)
        }
        else
        {
            let db = connection.db("nodedb")
            db.collection(tbl_product).updateOne({"id":id},{$set:obj},(err)=>{
                if(err)
                {
                    res.json({'update':'failed'})
                }
                else{
                    console.log("Data updated")
                    res.json({'update':'success'})
                }
            })
        }
    })
})
module.exports = router