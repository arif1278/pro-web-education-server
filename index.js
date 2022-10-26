const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Growhand API Running');
})

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = courses.find(c => c.category_id === id);
    res.send(category_course);
})

app.get('/course', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id === id);
    res.send(selectCourse);
})


app.listen(port, () => {
    console.log('Growhand news server running in port', port);
})