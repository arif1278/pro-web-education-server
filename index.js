const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Growhand API Running');
})

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Growhand news server running in port', port);
})