const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const userRoutes = require('./app/routes/user_routes')
const clientRoutes = require('./app/routes/client_routes')
const loanRoutes = require('./app/routes/loan_routes')
const budgetRoutes = require('./app/routes/budget_routes')
const errorHandler = require('./lib/error_handler')
const requestLogger = require('./lib/request_logger')


const db = require('./config/db')

const auth = require('./lib/auth')


const serverDevPort = 4741
const clientDevPort = 7165


mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const app = express()

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }))

const port = process.env.PORT || serverDevPort

app.use(auth)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger)

app.use(userRoutes)
app.use(clientRoutes)
app.use(loanRoutes)
app.use(budgetRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app
