const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
    // getAllPets(req, res) {
    //     console.log('trying to get all pets...');
    //     Pet.find()
    //         .sort('type')
    //         .then((data) => {
    //             res.json({
    //                 res: 'success',
    //                 data
    //             });
    //             console.log(data);
    //         })
    //         .catch(err => res.json(err))
    // },

    getAllPets(req, res) {
        console.log('trying to get all pets...');
        let pets = Pet.find({})
            .sort({ "type": 1 }).exec();


        pets.then((data) => {
            res.json({
                res: 'success',
                data
            });
            console.log(data);
        })
            .catch(err => res.json(err))
    },

    createPet(req, res) {

        Pet.create(req.body)
            .then((pet) => {
                res.json({ pet });
            })
            .catch(err => {
                const errors = [err.errors];
                for (let key in err.errors) {
                    errors.push(err.errors[key].message);
                }
                res.json({ errors });
            })
    },

    getPet(req, res) {

        Pet.findById(req.params.id)
            .then(pet => res.json({ pet }))
            .catch(err => res.json({ errors: err }))
    },

    updatePet(req, res) {
        console.log('**************************', req.body, '*******************');
        Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(pet => res.json({ pet }))
            .catch(err => {
                const errors = [err.errors];
                for (let key in err.errors) {
                    errors.push(err.errors[key].message);
                }
                res.json({ errors });
            })
    },

    deletePet(req, res) {
        Pet.findByIdAndDelete(req.params.id)
            .then(res.json({ status: 'success' }))
            .catch(err => res.json({ errors: err }))
    }
}