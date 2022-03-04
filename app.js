const express = require('express')

const app = express()
module.exports = app


//body parsing middleware
app.use(express.json())


//error handeling
app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })