const petsController = require('../controllers/petsController');

module.exports = function (app) {
    app.get('/api/pets', petsController.getAllPets);

    app.get('/api/pets/:id', petsController.getPet);

    app.post('/api/pets', petsController.createPet);

    app.put('/api/pets/:id', petsController.updatePet);

    app.delete('/api/pets/:id', petsController.deletePet);
}