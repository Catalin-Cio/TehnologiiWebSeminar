const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Server running successfully" });
});

router.get("/error", (req, res) => {
    throw new Error("Test error");
});

module.exports = router;
