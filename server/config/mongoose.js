const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/pets_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') > -1) {
        require(modelsPath + '/' + file);
    }
});