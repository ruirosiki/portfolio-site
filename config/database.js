// import mongoose to use it
const mongoose = require("mongoose");

// taking our URI and adding it to the mongoose connections
mongoose.connect(process.env.DATABASE_URL);

// saving our db connection to a var for easy use
const db = mongoose.connection;

// db.on - event listener. `on` something do something
// `connected` - the event of the something
// callback function - console logging for confirmation
db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
