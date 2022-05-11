const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const multer = require("multer");
const upload = multer();
const jwt = require("jsonwebtoken");
const secretObj = require("../config/jwt.js");
router.use(upload.array());
router.use(bodyparser.urlencoded({ extended: false }));
router.post("/check_token", (req, res) => {
  try {
    let token = req.body.token;
    if (token == "null") {
      res.send(false);
    } else {
      let decoded = jwt.verify(token, secretObj.secret);
      console.log(decoded);
      if (decoded) {
        res.send(true);
      } else {
        res.send(false);
      }
    }
  } catch (err) {
    console.log(err);
    console.log(err.name);
    if ((err.name = "TokenExpiredError")) {
      res.send("Expired");
    }
  }
});

module.exports = router;
