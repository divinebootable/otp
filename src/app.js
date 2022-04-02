const express = require("express");
const cors = require("cors");

const app = express();

// ==> API Routes:
const index = require("./routes/index.js");
const registerRoute = require("./routes/user.route.js")
const accountRoute = require("./routes/account.routes.js")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", registerRoute);
app.use("/api/", accountRoute);


module.exports = app;
