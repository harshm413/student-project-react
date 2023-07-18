import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
    sid : {
        type: Number,
        unique: true,
        required: true
    },
    name : String
})

const subject = mongoose.model('Subject', subjectSchema)

export default subject