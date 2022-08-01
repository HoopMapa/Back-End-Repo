const express = require('express');
const cors = require('cors')
const userRouter = require('./Routes/userRouter')
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routers
app.use(userRouter)

const PORT = 4000;
app.listen(PORT,()=>{
   console.log('working') 
})

