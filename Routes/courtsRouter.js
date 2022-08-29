const courtRouter = require('express').Router();
const {
    getAllCourts,
    getSingleCourt,
    createCourt,
    updateCourt,
   deleteCourt
} = require("../Controller/courtsController")

// display all post
courtRouter.get('/courts',getAllCourts )
// display single post
courtRouter.get('/courts/:id',getSingleCourt)
// add post to DB
courtRouter.post('/courts',createCourt)
// update post 
courtRouter.put('/courts/:id',updateCourt)
// delete post
courtRouter.delete('/courts/:id',deleteCourt)

module.exports = courtRouter;

