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

const getSingleUserFromEmail = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log(email);
    console.log(password)
    try {
        const data = await Users.getSingleUserFromDBEmail(email, password)
        return res.status(200).send(data)
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

const deleteUser = async (req, res) => {
    const user_id = req.params.id;
    if (!user_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Users.deleteUserFromDB(user_id);
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
    getSingleUserFromEmail,
   // updateUser,
   deleteUser
}