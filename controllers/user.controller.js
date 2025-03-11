const UserModel = require('../models/user.model');
const landingPage =  (request, response)=>{
  response.send('Hello new user')
}

const signIn = (req, res)=>{
  res.render('sign-up.ejs')
}
const RegisterUser = (req, res)=>{
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
 
}
const getDashboard = (req, res)=>{
  UserModel.find()
  .then((allUsers)=>{
  res.render('dashboard',{name: 'martha', gender: 'female', allUsers})
  }).catch((err)=>{
  console.log(err)})
  }
const deleteUser =  (req, res) => {
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
  }
  const editUser =  (req, res) => {
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
    }
const updateUser=  (req, res) => {
  
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
}
const endPoint = (request, response)=>{
  const endpoint = [
{firstname: "John" , Lastname: "zoe"},
{firstname: "Esther" , Lastname: "sqi"},
{firstname: "Heritage" , Lastname: "SQI"},
{firstname: "Habeeb" , Lastname: "SQI"},
];
  response.send(endpoint);
}
module.exports = {endPoint, landingPage,signIn, RegisterUser, getDashboard, deleteUser, editUser, updateUser};