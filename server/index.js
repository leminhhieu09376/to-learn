require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-tzt3hmz-shard-00-00.0gqokbd.mongodb.net:27017,ac-tzt3hmz-shard-00-01.0gqokbd.mongodb.net:27017,ac-tzt3hmz-shard-00-02.0gqokbd.mongodb.net:27017/?ssl=true&replicaSet=atlas-7s2oxk-shard-0&authSource=admin&retryWrites=true&w=majority`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)

    }
}

connectDB()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})