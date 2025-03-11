const express = require('express');
const router = express.Router();
const {addProduct} = require('../controllers/user.controller');
const {
endPoint,
landingPage, 
signIn, 
RegisterUser, 
getDashboard, 
deleteUser, 
editUser, 
updateUser
} = require('../controllers/user.controller');





//create endpoint

//send response to client

router.get('/',landingPage)

router.get('/user', endPoint)

router.get('/sign-up',signIn)

router.post('/register',RegisterUser)

router.get('/dashboard',getDashboard)

router.post("/delete/:id",deleteUser)

router.get('/edit/:id',editUser)

router.post('/update/:id',updateUser)
module.exports = router;