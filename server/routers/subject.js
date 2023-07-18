import express from 'express'
import subject from '../database/subject.js'

const router = express.Router()

router.get('/', (req, res) => {
    let message = "inside subject"
    console.log(message)
    res.send(message)
})
router.get('/getAll', async (req, res) => {
    let message = "inside subject All"
    let ret = await (async () => await subject.find())()
    console.log(ret)
    console.log(message)
    res.send(message)
})

export default router