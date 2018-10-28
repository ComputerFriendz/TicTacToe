const express = require("express");
const app = express();
const api = require("./src/server/api");
const path = require("path");
//const PORT = process.env.PORT || 3000;

app.use("/api", api);

// Serve static files
app.use(express.static(path.join(__dirname, "./", "dist")));

app.get("/Docs/HTML/AdminManual.html",function(req,res){
    res.sendFile(__dirname + "/Docs/HTML/AdminManual.html");
  });

  app.get("/Docs/pdf/AdminManual.pdf",function(req,res){
    res.sendFile(__dirname + "/Docs/pdf/AdminManual.pdf");
  });

  app.get("/Docs/HTML/DesignReport.html",function(req,res){
    res.sendFile(__dirname + "/Docs/HTML/DesignReport.html");
  });

  app.get("/Docs/pdf/DesignReport.pdf",function(req,res){
    res.sendFile(__dirname + "/Docs/pdf/DesignReport.pdf");
  });

  app.get("/Docs/HTML/DevelopmentManual.html",function(req,res){
    res.sendFile(__dirname + "/Docs/HTML/DevelopmentManual.html");
  });

  app.get("/Docs/pdf/DevelopmentManual.pdf",function(req,res){
    res.sendFile(__dirname + "/Docs/pdf/DevelopmentManual.pdf");
  });

  app.get("/Docs/images/diagram.png", function(req,res){
    res.sendFile(__dirname + "/Docs/images/diagram.png");
});

app.get("*", (req, res) => {
    res.send({
        error: "No routine defined"
    });
});

// Prettify the JSON responses (from the API)
app.set("json spaces", 2);

module.exports = app;
