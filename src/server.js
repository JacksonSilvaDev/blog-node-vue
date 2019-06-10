const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir');
const cors = require('cors')

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb://localhost:27017/blog-vue-node', {
    useCreateIndex: true,
    useNewUrlParser: true
})

requireDir('./models')

const routes = require('./routes')

app.use('/', routes.routes)
app.use('/api', routes.home)

app.listen(3000)