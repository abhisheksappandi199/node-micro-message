const express = require('express')
const configureDB = require('./config/database')
const router = require('./config/routes')
const app = express() 
const port = 3075

configureDB()
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('server running on port', port)
})