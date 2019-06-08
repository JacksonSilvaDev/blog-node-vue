const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');

module.exports = {
    async index(req, res) {
        try {
            const comment = await Comment.find({})

          return  res.send(comment);
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async show(req, res) {

    },
    async store(req, res) {

        try {
            const comment = await Comment.create(req.body)

            return res.send(comment)
        } catch (err) {
            return res.status(400).send(err);
        }
    },
    async update(req, res) {
        try {
            const comment = await Comment.findById(req.params.id, req.body) 
            return res.send(comment)  
        }catch (err) {
            return res.status(400).send(err);
        }
    },
    async destroy(req, res) {
        try {
            const comment = await Comment.findByIdAndRemove(req.params.id) 
            return res.send(true)  
        }catch (err) {
            return res.status(400).send(err);
        }
    }
}