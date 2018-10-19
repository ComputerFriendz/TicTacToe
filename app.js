const express = require("express");
const app = express();
const api = require("./src/server/api");
//const PORT = process.env.PORT || 3000;


app.use("/api", api);





app.get("*", (req, res) => {
    res.send({
        error: "No routine defined"
    });
});

module.exports = app;