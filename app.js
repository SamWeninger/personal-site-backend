const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const data = require("./data.js");

const app = express();
app.use(cors());

app.get("/", function(req, res) {
    console.log("GET");
    res.send(data);
});

module.exports.handler = serverless(app);

// let port = process.env.PORT;
// if(port == null || port == "") {
// 	port = 5000;
// }
// app.listen(port, function() {
// 	console.log("Server started successfully");
// });