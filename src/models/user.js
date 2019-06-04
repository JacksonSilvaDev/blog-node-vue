const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        // ^Atributo para ele ser unique
        required: true,
        lowercase: true,
        // ^Atributo para salvar na base como lowercase
    },
    password: {
        type: String,
        required: true,
        select: false,
        //^ Atributo select faz com que não seja retornado em uma query padrão, só quando utilizado o .select('+{nome do campo}')
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash

    return next();
})

const User = mongoose.model('User', UserSchema);