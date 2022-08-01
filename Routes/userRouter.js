const userRouter = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require("../Controller/userController")


// display all users
userRouter.get('/user', getAllUsers)

// display a user info 
userRouter.get('/user/:id', getSingleUser)

// add user to database
userRouter.post('/user', createUser)

// update user
userRouter.put('/user/:id/', updateUser)

// delete user
userRouter.delete('/user/:id', deleteUser)

module.exports = userRouter