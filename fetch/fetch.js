//import modules
const express = require('express')
let mongodb = require('mongodb')
//create mongoClient
let mcl = mongodb.MongoClient
//create router instance
var router = express.Router()
//import url
let url = require("../url")
//create rest api
router.get("/",(res,req)=>{
    mcl.connect(url,(err,connection)=>{
        if(err)
        {
            console.log("Error in connection-:",err)
        }
        else
        {
            let db = connection.db("nodedb")
            db.collection("tbl_product").find().toArray((err,array)=>{
                if(err)
                {
                    console.log("Error while fetching data -:",err)
                }
                else 
                {
                    console.log("Data sent")
                    res.send(array)
                }
            })
        }
    })
})
//export router
module.exports = router