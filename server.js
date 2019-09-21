const express = require('express');

let app = new express();

app.use(express.json());
app.use(express.static(__dirname + '/angular_app/public/dist/public'));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (req, res) => res.sendFile(__dirname + '/angular_app/public/dist/public/index.html'));

app.listen(3333, () => console.log('Listening on port 9000...'));