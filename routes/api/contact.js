const express = require("express");
const router = express.Router();

const contactsCtrl = require("../../controllers/api/contact");

router.post("/", contactsCtrl.sendMail);

module.exports = router;
