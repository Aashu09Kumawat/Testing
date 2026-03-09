const express = require("express");
const port = 5726;

const app = express();

app.get("/", (req, res) => {
    res.send("Server is on root.");
})
const hostname = '0.0.0.0'; // Listen on all network interfaces

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
