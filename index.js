const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/course.json");
const question = require("./data/question.json");

app.get("/", (req, res) => {
  res.send("Growhand server is running");
});

app.get("/course-category", (req, res) => {
  res.send(categories);
});

// category id

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_course = courses.filter((c) => c.category_id === id);
  res.send(category_course);
});

// All courses api

app.get("/courses", (req, res) => {
  res.send(courses);
});

// course id

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c._id === id);
  res.send(course);
});

// quiestion api

app.get("/questions", (req, res) => {
  res.send(question);
});



app.get("/faq", (req, res) => {
  res.send(question);
});

app.listen(port, () => {
  console.log("Growhand port is running", port);
});