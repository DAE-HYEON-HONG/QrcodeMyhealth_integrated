const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const upload = multer();
router.use(upload.array());
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");
const SecretKey = "Eb+hBV[{t8<,nW_&9Su{=Svgr[CW$654";
const connection = require("../config/mysql.js");
router.use(bodyparser.urlencoded({ extended: false }));

router.post("/resetN", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  let qrlist = req.body.qrlist;
  let pw = req.body.pw;
  console.log(qrlist);
  console.log(pw);
  connection.query(
    `select * from User_info where qrlist =?`,
    [qrlist],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      let pwn = crypto.AES.decrypt(result[0].pw.toString(), SecretKey);
      let pw2 = pwn.toString(crypto.enc.Utf8);
      if (pw === pw2) {
        res.send(true);
      } else {
        res.send(false);
      }
    }
  );
});

module.exports = router;
