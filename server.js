const routes = require('./routes');
const express = require('express');

const PORT = process.env.PORT || 5001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/', routes);
app.use('/notes', routes);

// listening port for all incoming get, post, delete requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});