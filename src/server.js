const app = require('express')()
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

const routes = require('./routes');

app.listen(3000)