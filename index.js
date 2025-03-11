const express = require ('express')
const app = express()
const ejs =  require('ejs')
const mongoose = require('mongoose')
const adminRouter = require('./routes/admin.route');
app.use('/admin', adminRouter);
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

let allUsers = []
//aft :add password to cluster
let URI = "mongodb+srv://tolulopeakinwale955:tessie+vic1@cluster0.tg22o.mongodb.net/amia-database?retryWrites=true&w=majority&appName=Cluster0"

//Connect  to Mongodb database
mongoose.connect(URI)
.then(()=>{console.log('connected to database')
})
.catch((error)=>{console.log(error)})
const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Example router listening on PORT ${PORT}`)
})

