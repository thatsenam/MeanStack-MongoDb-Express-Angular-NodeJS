const express = require('express');
const app = express();
const courseHelper = require('./controller/Course');
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(req.url);
});

app.get('/api/employees', (req, res) => {
    res.json(courseHelper.getAllCourses());
});

app.get('/api/employee/:id', (req, res) => {
    const requestedId = req.params.id;
    console.log(requestedId);
    const ret = courseHelper.getCourse(requestedId);
    console.log(ret);
    if (ret) res.json(ret);
    else {
        res.statusCode = 404;
        res.send("not found :(");
    }
});

app.post('/api/employee', (req, res) => {
    const courseTitle = req.body.name;
    const c = courseHelper.addCourse(courseTitle);
    res.json(c);
});

app.listen(PORT, () => {
    console.log("Listening at port: " + PORT);
});

