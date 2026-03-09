const express = require("express");
const port = 5726;

const app = express();

app.get("/", (req, res) => {
    res.send("Server is on root.");
})

app.listen(port, () => {
    console.log(`Server is listing on port  ${port}`);
})