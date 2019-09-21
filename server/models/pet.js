require("../config/mongoose");
const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "All Pets must have a name"],
        minlength: [3, "Pet's Name must have at least 3 characters."],
        unique: [true, 'This name already exist']
    },
    type: {
        type: String,
        required: [true, "All Pet's must have a type"],
        minlength: [3, "The minimum lengfth for a Pet type is 3"]
    },
    description: {
        type: String,
        required: [true, "All pet's must have a description"],
        minlength: [3, "A Description must be more then three characters."]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true, strict: false });

// PetSchema.plugin(uniqueValidator, { message: 'All of our pets here have unique names! Please Try a new Name.' });
Pet = mongoose.model('Pet', PetSchema);