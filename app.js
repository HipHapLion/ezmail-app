const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// database connect
mongoose.connect(config.database);

// On Connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database " + config.database);
});

// On Error
mongoose.connection.on("error", (err) => {
    console.log("Database error " + err);
});

const app = express();

const users = require("./routes/users");
const emails = require("./routes/emails");

// Port number
const port = process.env.PORT || 3000;

//  CORS middleware
app.use(cors());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);
app.use("/emails", emails);

// Index Route
app.get("/", (req, res) => {
    res.send("Invalid Endpoint");
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
app.listen(port, () => {
    console.log("server started on port " + port);
});
