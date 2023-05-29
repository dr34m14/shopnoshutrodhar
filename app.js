const express = require("express")
const path = require('path')
const app = express()
const port = 8080;
const file = __dirname + "/public/"


//static folder
app.use('/project/counter', express.static(`${__dirname}/public/counter`))


app.get('/', (req, res) => {
    res.sendFile(path.join(file, 'home', 'index.html'))
})
app.get('/project', (req, res) => {
    res.status(200).sendFile(path.join(file, 'home', 'project.html'))

})



app.listen(port, () => {
    console.log(`listing the port:${port}`)
})