const mongoose = require('mongoose');
var uniqueValidator  = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "Unique pet name is required"],
        required: [true, "Name field is required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, "Type cannot be blank"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description cannot be blank"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// PetSchema.plugin(uniqueValidator , {message: '{PATH} This pet name exists in our database. Please enter a different name.'});
const Pet = mongoose.model('Pet', PetSchema);