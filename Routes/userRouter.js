const userRouter = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    //updateUser,
   deleteUser
} = require("../Controller/userController")


// display all users
userRouter.get('/users', getAllUsers)

// display a user info 
userRouter.get('/users/:id', getSingleUser)

// add user to database
userRouter.post('/users', createUser)

// // update user
// userRouter.put('/user/:id/', updateUser)

// // delete user
userRouter.delete('/users/:id', deleteUser)

module.exports = userRouter