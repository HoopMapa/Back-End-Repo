const postRouter = require('express').Router();
const {
    getAllPosts,
    getSinglePost,
    createPost,
    //updateUser,
   deletePost
} = require("../Controller/postsController")

// display all post
postRouter.get('/posts',getAllPosts )
// display single post
postRouter.get('/posts/:id',getSinglePost)
// add post to DB
postRouter.post('/posts',createPost)
// update post 
// postRouter.put('/posts/:id',)
// delete post
postRouter.delete('/posts/:id',deletePost)

module.exports = postRouter;

