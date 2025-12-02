"use strict";

const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routere
app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

app.use((err, req, res, next) => {
    console.error("Error stack:", err.stack);
    next(err); // trimite mai departe la handler-ul final
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
});
