const express = require('express');
const cors = require('cors')
const userRouter = require('./Routes/userRouter')
const postRouter = require('./Routes/postRouter')
const courtRouter = require('./Routes/courtsRouter')
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routers
app.use(userRouter)
app.use(postRouter)
app.use(courtRouter)

const PORT = 5004;
app.listen(PORT,()=>{
   console.log('working on PORT', PORT) 
})

