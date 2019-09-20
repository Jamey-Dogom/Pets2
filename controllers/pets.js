const mongoose = require('mongoose')
const Pet = mongoose.model('Pet')

module.exports = {
    create: function (req, res) {
        Pet.create(req.body)
            .then(pet => {
                res.json(pet)
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    findAll: function (req, res) {
        Pet.find()
            .sort('type')
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    },

    findOne: function (req, res) {
        Pet.findById(req.params.id)
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    },

    edit: function (req, res) {
        Pet.updateOne({
                _id: req.params.id
            }, {
                $set: {
                    name: req.body.name,
                    type: req.body.type,
                    description: req.body.description,
                    skill1: req.body.skill1,
                    skill2 : req.body.skill2,
                    skill3 : req.body.skill3,
                    likes : req.body.likes
                }
            }, {
                new: true,
                runValidators: true
            })
            .then(pet => {
                res.json({
                    pet
                })
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    delete: function (req, res) {
        Pet.deleteOne({
                _id: req.params.id
            })
            .then(() => {
                res.redirect('/pets')
            })
            .catch(err => res.json(err));
    },

    addLike: function(req, res){
        let pet=req.body;
        Pet.findOneAndUpdate({_id:req.params.id}, pet, function(err,data){
          if(err){
            return res.json({message:"Error", error:err})
          } else {
            return res.json({message:"Success",data})
          }
        })
      }

    //     rateCreate: function (req, res) {
    //         Jersey.findByIdAndUpdate(
    //             req.params.id, {
    //                 $push: {
    //                     rate: new Rating(req.body)
    //                 }
    //             },
    //             {
    //             runValidators : true,
    //             new : true
    //             }
    //         )
    //         .catch(console.log)
    //         .finally(() => res.redirect('/jerseys'))
    // },

}