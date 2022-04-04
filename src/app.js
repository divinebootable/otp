const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ==> API Routes:
const index = require("./routes/index.js");
const registerRoute = require("./routes/user.route.js");
const accountRoute = require("./routes/account.routes.js");
const { constants } = require("buffer");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", registerRoute);
app.use("/api/", accountRoute);

module.exports = app;
