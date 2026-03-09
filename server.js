const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Server is on root.");
})


// Use '0.0.0.0' to ensure it's accessible from the outside world
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`);
});