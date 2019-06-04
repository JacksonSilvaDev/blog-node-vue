const mongoose = require('mongoose');

const CommentsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Comments = mongoose.model('Comments', CommentsSchema);