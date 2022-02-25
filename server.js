// import express body-parser and cors module
var express = require('express')
var bodyparser = require('body-parser')
//enable CORS -> cross origin resource
var cors = require('cors')

//create rest object
var app = express()
//set json as MIME type
app.use(bodyparser.json())
//client not sending from data -> encoding to json
app.use(bodyparser.urlencoded({extended:false}))
//enable CORS -> cross origin resource sharing
app.use(cors())
//import fetch, insert,update,delete module
var fetch = require("./fetch/fetch")
var insert = require("./insert/insert")
var update = require("./update/update")
var remove = require("./delete/delete")
//use above modules
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remove)
//assign port no
app.listen(8080)
console.log("server listening port no 8080")
