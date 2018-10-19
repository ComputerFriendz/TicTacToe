const express = require("express");
const router = express.Router();
const tictactoe = require("../logic/tictactoe");

console.log("hi");
router.get("/tictactoe/:name", function (req, res) {
    res.status(200);
    res.send({
        tictactoe: tictactoe(req.params.name)
    });
});

module.exports = router;