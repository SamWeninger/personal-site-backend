import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();
app.use(cors());

// Function to serve all static files
// inside public directory.
app.use(express.static('public')); 

app.get("/", function(req, res) {
    console.log("GET");
    res.send(data);
});

let port = process.env.PORT;
if(port == null || port == "") {
	port = 5000;
}
app.listen(port, function() {
	console.log("Server started successfully");
});