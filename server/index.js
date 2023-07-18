import express from 'express'
import mongoose from 'mongoose'
import studentRoute from './routers/student.js'
import subjectRoute from './routers/subject.js'

const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/student', studentRoute)
app.use('/subject', subjectRoute)

app.get('/', (req, res) => {
    let message = "at /"
    console.log(message)
    res.send(message)
})

mongoose.connect("mongodb://127.0.0.1:27017/myfirstdb")
    .then(()=>console.log("Connection Success!!!"))
        .catch((err)=>console.log(err))

app.listen(PORT, () => console.log(`connected at port: http://localhost:${PORT}`))