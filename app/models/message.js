const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    body: {
        type: String, 
        required: true, 
        minlength: 3
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }, 
    createdAt: {
        type: Date, 
        default: Date.now 
    }
})

const Message = mongoose.model('Message', messageSchema) 

module.exports = Message