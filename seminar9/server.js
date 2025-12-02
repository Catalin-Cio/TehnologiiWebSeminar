"use strict";

const express = require("express");
const Employee = require("./models/Employee");
const sequelize = require("./config/sequelize");
const { Op } = require("sequelize");

const app = express();
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

// GET ALL / FILTER BY NAME / SORT BY FIELD
app.get("/employees", async (req, res) => {
  try {
    const { name, sortBy } = req.query;
    let whereCondition = {};
    if (name) {
      whereCondition.name = { [Op.like]: `%${name}%` };
    }

    const employees = await Employee.findAll({
      where: whereCondition,
      order: sortBy ? [[sortBy, "ASC"]] : undefined,
      attributes: ["id", "name", "position", "salary"], // proiecție
    });

    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET BY ID
app.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE
app.post("/employees", async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
app.put("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });

    await employee.update(req.body);
    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
app.delete("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });

    await employee.destroy();
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
