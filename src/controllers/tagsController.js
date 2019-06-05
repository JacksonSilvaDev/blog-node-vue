const mongoose = require('mongoose');
const Tag = mongoose.model('Tags');

module.exports = {
    async index(req, res) {
        try {
            const tags = Tag.find({})
            res.send(tags)
        } catch (err) {
            res.status(400).send({
                error: 'Error to loading Tags'
            })
        }
    },
    async show(req, res) {

    },
    async store(req, res) {

        try {
            const tag = await Tag.create(req.body)
            return res.send(tag);
        } catch (err) {
            return res.status(400).send({
                error: 'Error to create a new project'
            });
        }
    },
    async update(req, res) {

    },
    async destroy(req, res) {
        try {
            await Tag.findByIdAndRemove(req.params.tagId);
            return res.send(true);
        } catch (err) {
            return res.status(400).send({
                error: 'Error to delete a tag'
            });
        }
    }


}