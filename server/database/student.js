import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    uid : {
        type: Number,
        unique: true,
        required: true
    },
    name : String,
    subjects : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
})

const student = mongoose.model('Student', studentSchema)

export default student