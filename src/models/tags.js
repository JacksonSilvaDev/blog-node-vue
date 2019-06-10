const mongoose = require('mongoose');

const TagsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
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

const Tags = mongoose.model('Tags', TagsSchema);