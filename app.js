const express = require('express');
const routes = require('./routes/api')

const app = express()

app.use(routes);

//body parsing middleware
app.use(express.json())

//error handeling
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app