const Posts = require('../models/postsModel')

const getAllPosts = async (req,res) => {
    try{
        const data = await Posts.getAllPostsFromDB()
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

const getSinglePost = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const data = await Posts.getSinglePostFromDB(id)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

const createPost = async (req, res) => {

    const {
        user_id,
        post_body,
        court
    } = req.body.newPostInfo

    const newPostInfo = {
        user_id,
        post_body,
        basketball_court: court
    }
    if (!newPostInfo) {
        return res.status(404).json({
            message: 'NO DATA IS BEING PROVIDED'
        })
    }

    try {
        const data = await Posts.createPostFromDB(newPostInfo)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })

    }
}

const deletePost = async (req, res) => {
    const post_id = req.params.id;
    if (!post_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Posts.deletepostFromDB(post_id);
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
    getAllPosts,
    getSinglePost,
    createPost,
    // updatePost
    deletePost
}