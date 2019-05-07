let courses = [
    { id: parseInt(Math.random() * 10000), name: "Node js" },
    { id: parseInt(Math.random() * 10000), name: "Angular" },
    { id: parseInt(Math.random() * 10000), name: "JavaScript" },
    { id: parseInt(Math.random() * 10000), name: "React" },
    { id: parseInt(Math.random() * 10000), name: "Python" },
];

function getAllCourses() {
    return courses;
}

function getCourse(id) {
    for (let i = 0; i < courses.length; i++) {
        const c = courses[i];
        console.log(c);
        if (c.id == id) {
            return c;
        }
    }
    return false;
}

function updateCourse(id, newName) {
    for (let i = 0; i < courses.length; i++) {
        const c = courses[i];
        if (c.id == id) {
            courses[i].name = newName;
            return courses[i];
        }
    }
    return false;
}
function addCourse(nName) {
    let c = {
        id: parseInt(Math.random() * 10000),
        name: nName
    };
    courses.push(c);
    return c;
}

function deleteCourse(id) {
    for (let i = 0; i < courses.length; i++) {
        const c = courses[i];
        if (c.id == id) {
            const ret = c;
            courses.splice(i, 1);
            return ret;
        }
    }
    return false;
}

module.exports = { getAllCourses, getCourse, updateCourse, addCourse, deleteCourse };