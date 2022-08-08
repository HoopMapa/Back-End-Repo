const Users = require('../models/userModel')

const getAllUsers = async (req, res) => {
    try {
        const data = await Users.getAllUsersFromDB()
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

const getSingleUser = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const data = await Users.getSingleUserFromDB(id)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

const createUser = async (req, res) => {
    const {
        username,
        password,
        phonenumber,
        email,
        firstName,
        lastName
    } = req.body
    const newUserInfo = {
        username,
        password,
        phonenumber,
        email,
        firstName,
        lastName
    }
    if (!newUserInfo) {
        return res.status(404).json({
            message: 'NO DATA IS BEING PROVIDED'
        })
    }

    try {
        const data = await Users.createUserFromDB(newUserInfo)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })

    }
}

module.exports = {
    getAllUsers,
    createUser,
    getSingleUser,
   // updateUser,
   // deleteUser
}