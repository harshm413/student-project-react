import express from 'express'
import student from '../database/student.js'

const router = express.Router()

router.get('/', (req, res) => {
    let message = "inside student"
    console.log(message)
    res.send(message)
})
router.get('/getAll', (req, res) => {
    let message = "inside student All"
    student.find().then((result) => {
        console.log(result)
        console.log(message)
        res.send(message)
    })
    console.log("kkk")
})

export default router