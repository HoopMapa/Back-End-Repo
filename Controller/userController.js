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
            message: `user ${user_id} deleted`
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })

    }
}
const updateUser = async(req,res) => {
    const user_id = req.params.id;
    const {
        username,
        phonenumber,
        bio,
    } = req.body
    const updateUserInfo = {
        username,phonenumber,bio,
        user_id
    }
    console.log(updateUserInfo)
    try {
        const data = await Users.updateUserFromDB(updateUserInfo);
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
   updateUser,
   deleteUser
}