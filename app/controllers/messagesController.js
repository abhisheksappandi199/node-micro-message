const Message = require('../models/message')
const messagesController = {}

messagesController.listAll = (req, res) => {
    Message.find()
        .then((messages) => {
            res.json(messages)
        })
}

messagesController.myMessages = (req, res) => {
    Message.find({ userId: req.userId })
        .then((messages) => {
            res.json(messages)
        })
}

messagesController.show = (req, res) => {
    const id = req.params.id 
    Message.findById(id)
        .then((message) => {
            res.json(message)
        })
}


messagesController.create = (req, res) => {
    const body = req.body 
    const message = new Message(body) 
    // assigning the user id to the message
    message.userId = req.userId 
    message.save()
        .then((message) => {
            res.json(message)
        })
        .catch((err) => {
            res.json(err)
        })
}

// update 
messagesController.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Message.findOneAndUpdate({ _id: id, userId: req.userId}, body, { new: true, runValidators: true} )
        .then((message) => {
            if(message) {
                res.json(message)
            } else {
                res.json({})
            }
        })
}

// destroy
messagesController.destroy = (req, res) => {
    const id = req.params.id 
    Message.findOneAndDelete({ _id: id, userId: req.userId })
        .then((message) => {
            if(message) {
                res.json(message)
            } else {
                res.json({})
            }
            
        })
}

module.exports = messagesController