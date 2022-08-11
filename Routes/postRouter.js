const postRouter = require('express').Router();


// display all post
postRouter.get('/posts', )
// display single post
postRouter.get('/posts/:id',)
// add post to DB
postRouter.post('/post',)
// update post 
postRouter.put('/posts/:id',)
// delete post
postRouter.delete('/posts/:id',)

module.exports = postRouter;

