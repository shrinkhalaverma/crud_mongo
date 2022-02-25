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
        "id":id,
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
            db.collection(tbl_product).insertOne(obj,(err)=>{
                if(err)
                {
                    res.json({'insert':'failed'})
                }
                else{
                    console.log("Data inserted")
                    res.json({'insert':'success'})
                }
            })
        }
    })
})
module.exports = router