const mongoose = require('mongoose');

const CommentsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'User'
    },
    description: {
        type: String,
        require: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'Post'
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
})

const Comments = mongoose.model('Comments', CommentsSchema);