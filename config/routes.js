const express = require('express')
const router = express.Router() 
const usersController = require('../app/controllers/usersController')
const messagesController = require('../app/controllers/messagesController')
const { authenticateUser  } = require('../app/middlewares/authentication')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)

// private route
router.get('/api/users/account', authenticateUser ,usersController.account)
router.get('/api/messages', authenticateUser, messagesController.listAll)
router.get('/api/messages/my', authenticateUser, messagesController.myMessages)
router.post('/api/messages', authenticateUser, messagesController.create )
router.get('/api/messages/:id', authenticateUser, messagesController.show)
router.put('/api/messages/:id', authenticateUser, messagesController.update)
router.delete('/api/messages/:id', authenticateUser, messagesController.destroy)

module.exports = router