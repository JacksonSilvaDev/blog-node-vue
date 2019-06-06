const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Tags'
    }],
    image: {
        type: String,
        require: true
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

const Post = mongoose.model('Post', PostSchema);