// import boot
const express = require ('express')
const app = express()
const ejs =  require('ejs')
const mongoose = require('mongoose')
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

//User Schema
let UserSchema = mongoose.Schema({
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  email: {type:String, required:true},
  Password: {type:String, required:true},
  registrationDate: {type: Date, default: Date.now} // Added registrationDate field
})
let UserModel = mongoose.model('amia-database', UserSchema, 'user_collection')

const PORT = 3000;

//create endpoint
const endpoint = [
{firstname: "John" , Lastname: "zoe"},
{firstname: "Esther" , Lastname: "sqi"},
{firstname: "Heritage" , Lastname: "SQI"},
{firstname: "Habeeb" , Lastname: "SQI"},
]
//send response to client

app.get('/', (request, response)=>{
  response.send('Hello new user')
})

app.get('/user', (request, response)=>{
    response.send(endpoint)
})
app.listen(PORT, () =>{
    console.log(`Example app listening on PORT ${PORT}`)
  })
  app.get('/sign-up',(req, res)=>{
    res.render('sign-up.ejs')
  })
  app.post('/register',(req, res)=>{
      console.log(allUsers)
      let form = new UserModel(req.body)
      form.save()
      .then(()=>{
        console.log('user saved')
        })
        .catch((err)=>{
          console.log(err)})
          res.redirect('/dashboard')
          res.send({ status: false, message: "Invalid input" });
      // allUsers.push(req.body)
      // res.send('welcome you are successfully registered')
     
  })
  
  app.get('/dashboard',(req, res)=>{
  UserModel.find()
  .then((allUsers)=>{
  res.render('dashboard',{name: 'martha', gender: 'female', allUsers})
  }).catch((err)=>{
  console.log(err)})
  })
  
  app.post("/delete/:id", (req, res) => {
    const { id } = req.params;
    console.log({id})
    UserModel
      .findByIdAndDelete(id)
      .then((deletedUser) => {
        if (!deletedUser){
          return res.status(404).send("User not found");
        }
        res.redirect("/dashboard");
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  })
  
  app.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  
    UserModel.findById(id)
    .then((user) => {
    if (!user) {
      return res.status(404).send("User not found");}
      res.render('edit', { user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
  })
  
  app.post('/update/:id', (req, res) => {
  
    const { id } = req.params;
    const { firstName, lastName, email, Password } = req.body;
    
    UserModel
      .findByIdAndUpdate(id, { firstName, lastName, email, Password })
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).send("User not found");
        }
        res.redirect("/dashboard");
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
  })
  })
  
