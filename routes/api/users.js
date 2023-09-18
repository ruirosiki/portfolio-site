// routes/api/users.js

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
//use in any router module that has routes requiring a logged in user
// require authorization middleware
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/users
router.post("/", usersCtrl.create);
// POST - handles log in controller
router.post("/login", usersCtrl.login);
// GET - handles getting the token and checking it
// Add ensureLoggedIn to any routes that need protection
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
