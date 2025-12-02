const express = require("express");
const { departments } = require("../db");
const router = express.Router();

// GET all departments
router.get("/departments", (req, res) => {
    res.json(departments);
});

// POST a new department
router.post("/departments", (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ error: "id and name are required" });
    }
    const newDept = { id, name };
    departments.push(newDept);
    res.status(201).json(newDept);
});

module.exports = router;
