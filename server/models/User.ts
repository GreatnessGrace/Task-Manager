import { Schema, model } from 'mongoose';

const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
}, {
    timestamps: true,
});

export const USER = model('User', schema);
