const express = require("express")
const path = require('path')
const file = __dirname + "/.."+"/public/"


module.exports= function route(app){


//static folder

app.use('/project/love', express.static(path.join(file,'love')))
app.use('/project/counter', express.static(path.join(file,'counter')))
app.use('/project/color_flipper', express.static(path.join(file,'color_flipper')))
app.use('/project/ninja', express.static(path.join(file,'ninja')))

app.use('/project/kala_chasma', express.static(path.join(file,'kala_chasma')))
}