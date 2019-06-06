const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        res.send('Hey')
    },
    async show(req, res) {

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

    }


}