if (process.env.NODE_ENV !== ' production') {
    require('dotenv').parse()
}

const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.setMaxListeners('view engine', 'ejs')
app.set('views', _dirname + 'views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.Port || 3000)

