let express = require("express")
let app = express()
let port = process.env.PORT || 3050;
let route = require('./routes/route')
let blog = require('./routes/blogRoutes')
let bodyparser = require('body-parser')
let mongoose =  require('./db/datbase')
let cookieparser = require('cookie-parser')
app.use(bodyparser.urlencoded({extended : true}))
require('dotenv').config();


app.use(express.json());
app.use(cookieparser())
app.use('/' , route)
app.use('/blog' , blog)

app.listen(port , (req ,res) => {
    console.log(`port successfully run on ${port}`)
})
 
