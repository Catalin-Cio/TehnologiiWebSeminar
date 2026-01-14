const express = require("express");
const app = express();
const port = 3000;

const sequelize = require("./sequelize");

const University = require("./models/university");
const Student = require("./models/student");
const Course = require("./models/course");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

University.hasMany(Student);
Student.belongsTo(University);

Student.belongsToMany(Course, { through: "enrollments" });
Course.belongsToMany(Student, { through: "enrollments" });

app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Database created!" });
  } catch (err) {
    next(err);
  }
});

app.post("/university", async (req, res, next) => {
  try {
    await University.create(req.body);
    res.status(201).json({ message: "University created!" });
  } catch (err) {
    next(err);
  }
});

app.get("/universities", async (req, res, next) => {
  try {
    res.json(await University.findAll());
  } catch (err) {
    next(err);
  }
});

app.post("/universities/:universityId/students", async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId);
    if (!university)
      return res.status(404).json({ message: "University not found!" });

    await Student.create({
      studentFullName: req.body.studentFullName,
      studentStatus: req.body.studentStatus,
      universityId: university.id
    });

    res.status(201).json({ message: "Student created!" });
  } catch (error) {
    next(error);
  }
});

app.get("/universities/:universityId/students", async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId, {
      include: [Student]
    });
    if (!university)
      return res.status(404).json({ message: "University not found!" });

    res.json(university.students);
  } catch (error) {
    next(error);
  }
});

app.get("/universities/:universityId/students/:studentId", async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId, {
      include: [{
        model: Student,
        where: { id: req.params.studentId }
      }]
    });

    if (university && university.students.length > 0)
      res.json(university.students[0]);
    else
      res.status(404).json({ message: "Student not found!" });
  } catch (error) {
    next(error);
  }
});

app.put("/universities/:universityId/students/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: {
        id: req.params.studentId,
        universityId: req.params.universityId
      }
    });

    if (!student)
      return res.status(404).json({ message: "Student not found!" });

    student.studentFullName = req.body.studentFullName;
    student.studentStatus = req.body.studentStatus;
    await student.save();

    res.json({ message: "Student updated!" });
  } catch (error) {
    next(error);
  }
});

app.delete("/universities/:universityId/students/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: {
        id: req.params.studentId,
        universityId: req.params.universityId
      }
    });

    if (!student)
      return res.status(404).json({ message: "Student not found!" });

    await student.destroy();
    res.json({ message: "Student deleted!" });
  } catch (error) {
    next(error);
  }
});

app.post("/courses", async (req, res, next) => {
  try {
    await Course.create(req.body);
    res.status(201).json({ message: "Course created!" });
  } catch (error) {
    next(error);
  }
});

app.post("/students/:studentId/courses/:courseId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    const course = await Course.findByPk(req.params.courseId);

    if (!student || !course)
      return res.status(404).json({ message: "Student or course not found!" });

    await student.addCourse(course);
    res.status(201).json({ message: "Enrollment created!" });
  } catch (error) {
    next(error);
  }
});

app.get("/universities/:universityId/students/:studentId/enrollements", async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: {
        id: req.params.studentId,
        universityId: req.params.universityId
      },
      include: [Course]
    });

    if (!student)
      return res.status(404).json({ message: "Student not found!" });

    res.json(student.courses);
  } catch (error) {
    next(error);
  }
});

app.get("/", async (req, res, next) => {
  try {
    const universities = await University.findAll({
      include: [
        {
          model: Student,
          include: [Course]
        }
      ]
    });

    const enrollments = await sequelize.models.enrollments.findAll({
      attributes: ["studentId", "courseId"]
    });

    const result = universities.map(u => ({
      id: u.id,
      universityName: u.universityName,
      students: u.students,
      courses: [
        ...new Map(
          u.students
            .flatMap(s => s.courses || [])
            .map(c => [c.id, c])
        ).values()
      ],
      enrollements: enrollments.filter(e =>
        u.students.some(s => s.id === e.studentId)
      )
    }));

    res.json(result);
  } catch (error) {
    next(error);
  }
});
