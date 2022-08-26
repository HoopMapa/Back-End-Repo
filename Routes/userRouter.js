const userRouter = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    getSingleUserFromEmail,
    createUser,
    updateUser,
   deleteUser
} = require("../Controller/userController")


// display all users
userRouter.get('/users', getAllUsers)

// display a user info 
userRouter.get('/users/:id', getSingleUser)
userRouter.post('/login', getSingleUserFromEmail)

// add user to database
userRouter.post('/users', createUser)

//
userRouter.patch('/users', updateUser)

// // delete user
userRouter.delete('/users/:id', deleteUser)

module.exports = userRouter