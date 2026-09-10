const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Node.js"
    });
});

app.get("/healthy", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
