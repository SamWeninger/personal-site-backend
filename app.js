// import express from "express";
// import bodyParser from "body-parser";

// const app = express();
// // app.use(express.json());
// app.use(bodyParser.urlencoded( {extended: false} ));
// app.use(bodyParser.json());

// const data = {
//     name: "sam"
// }

// // app.use(function(req, res, next) {
// //     res.header('Access-Control-Allow-Origin', '*');
// //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// //     next();
// // });

// // Home
// app.get("/", (req, res) => {
//     console.log("get");
//     // res.send(JSON.stringify(data));
//     res.send(json({
//         name: "Sam",
//         age: "23"
//     }));
// });

// // Work
// app.get("/work", (req, res) => {
//     res.send("work");
// });

// // Projects
// app.get("/projects", (req, res) => {
//     res.send("projects");
// });

// // Education
// app.get("/education", (req, res) => {
//     res.send("education");
// });

// // LISTEN
// let port = process.env.PORT;
// if (port == null || port == "") port = 5000;

// app.listen(port, () => {
//     console.log("listing on port " + port);
// });

import express from "express";
import Quote from 'inspirational-quotes';

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", function(req, res) {
    console.log("GET");
    res.send({
        name: "sam",
        age: 23
    });
});

let port = process.env.PORT;
if(port == null || port == "") {
	port = 5000;
}
app.listen(port, function() {
	console.log("Server started successfully");
});