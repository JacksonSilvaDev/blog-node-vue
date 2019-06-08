const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = {
    async index(req, res) {
        try {
            const posts = await Post.find({});

            res.send(posts)
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async show(req, res) {
        try {
            const post = await Post.findById(req.params.id);

            res.send(post)
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async store(req, res) {

        try {

        } catch (err) {
            return res.status(400).send(err);
        }
    },
    async update(req, res) {

    },
    async destroy(req, res) {
        try {
            const post = await Post.findByIdAndRemove(req.params.id) 
            return res.send(comment)  
        }catch (err) {
            return res.status(400).send(err);
        }
    }


}