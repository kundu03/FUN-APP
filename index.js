const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function(req,res) {
    if(req.body.hasOwnProperty("joke"))
    {
        res.sendFile(__dirname + "/public/joke.html");
    }
    else if(req.body.hasOwnProperty("memes"))
    {
        res.sendFile(__dirname + "/public/memes.html");
    }
    else if(req.body.hasOwnProperty("quote"))
    {
        res.sendFile(__dirname + "/public/quote.html");
    }
})

app.get("/joke", function(req,res) {
    res.sendFile(__dirname + "/public/joke.html");
});

app.post("/joke", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/memes", function(req,res) {
    res.sendFile(__dirname + "/public/memes.html");
});

app.post("/memes", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/quote", function(req,res) {
    res.sendFile(__dirname + "/public/quote.html");
});

app.post("/quote", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000.");
});