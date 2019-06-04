const mongoose = require('mongoose');

const TagsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Tags = mongoose.model('Tags', TagsSchema);