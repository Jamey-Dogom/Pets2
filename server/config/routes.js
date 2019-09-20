const mongoose = require('mongoose')
    Dog = mongoose.model('Pet')

const pets = require('../../controllers/pets')

module.exports = function(app) {

// // Get all pets
app.get('/api/pets', pets.findAll)

// Create a pet
app.post('/api/pets', pets.create);

// Find a pet by id
app.get('/api/pets/:id', pets.findOne);

// Update a pet
app.put('/api/pets/:id/', pets.edit);

// Delete a pet
app.delete('/api/pets/:id', pets.delete);

// app.post('/pets/:id/rates', pets.rateCreate);

app.put('/api/pets/:id/like', pets.addLike)

}
