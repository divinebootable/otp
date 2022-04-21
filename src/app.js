const express = require("express");
const cors = require("cors");
//const path = require("path");
const fileupload = require('express-fileupload');
const db =  require('../data/db')

const app = express();

// ==> API Routes:
const index = require("./routes/index.js");
const registerRoute = require("./routes/user.route.js");
const accountRoute = require("./routes/account.routes.js");
const { constants } = require("buffer");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(fileupload());
app.use(cors());

app.use(index);
app.use("/api/", registerRoute);
app.use("/api/", accountRoute);

// app.post('/api/upload', async (req, res) => {
// 	console.log(req.files)
//     const {name, data} = req.files.pic;
//     const { users, created_on } = req.body;
//     if (name && data) {
//         await db.insert({name: name, data: data, users:users,created_on:created_on}).into('userImage');
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(400);
//     }
// })

app.post('/api/upload', (req, res)=>{
	console.log(req)
    const {name, data} = req.files.pic;
    const { users, created_on } = req.body;
     db("userImage")
    .insert({ name, data, users, created_on })
    .returning("*")
    .then((data) => {
      res.senStatus(200);
    })
    .catch((err) => res.status(400).json({ Error: "bad request" }));
})

module.exports = app;
