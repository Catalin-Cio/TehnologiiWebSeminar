const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.get("/", async (req, res) => {
    const employees = await Employee.findAll();
    res.json(employees);
});

router.post("/", async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
