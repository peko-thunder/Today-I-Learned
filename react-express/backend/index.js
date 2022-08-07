const express = require("express");
const app = express();
const path = require('path');
const port = 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.listen(port, () => console.log(`Starting Server localhost:${port}`));

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
