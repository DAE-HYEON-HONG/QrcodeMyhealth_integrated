const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const { convertArrayToCSV } = require("convert-array-to-csv");
const multer = require("multer");
const upload = multer();
router.use(upload.array());
const dateUtil = require("date-utils");
const connection = require("../config/mysql");
const qrcode = require("qrcode");
const fs = require("fs");
const zipFolder = require("zip-folder");
const AdmZip = require("adm-zip");
router.use(bodyparser.urlencoded({ extended: false }));

router.post("/qrlist", async (req, res) => {
  let zip = new AdmZip();
  try {
    let qrlist = req.body.qrlist;
    let date = new Date();
    let dateFormat = date.toFormat("YYYYMMDD");
    let DateFormat2 = dateFormat.substr(2);
    let random = Math.random().toString(36);
    let date2 = new Date();
    let date2Format = date2.toFormat("YYYY");
    let QRCODEList = [];
    fs.mkdirSync(`/var/NewQrcode/server/img/${random}`);
    await (function makeQR() {
      for (let i = 1; i <= qrlist; i++) {
        let random1 = Math.random().toString(36).substr(2, 11);
        let qrlist = DateFormat2 + random1;
        let qrUrl = `https://hong4383.r-e.kr/qrlist/:${qrlist}`;
        connection.query(
          `insert into User_info(qrlist, freeInfo, used, year) values(?, "0", "0", ?);`,
          [qrlist, date2Format],
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
        qrcode.toDataURL(qrUrl, { width: 200 }, (err, url) => {
          const data = url.replace(/.*,/, "");
          const img = Buffer.from(data, "base64");
          fs.writeFile(
            `/var/NewQrcode/server/img/${random}/${qrlist}.png`,
            img,
            (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log(`${qrUrl} 저장성공`);
                QRCODEList.push({
                  name: `https://hong4383.r-e.kr/qrlist/:${qrlist}`,
                });
              }
            }
          );
        });
      }
    })();
    setTimeout(function makeCsv() {
      let Csv = convertArrayToCSV(QRCODEList);
      fs.writeFile(
        `/var/NewQrcode/server/img/${random}/QRCODELIST${random}.csv`,
        Csv,
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`QRCODELIST${random}.csv 저장성공`);
            Csv = "";
          }
        }
      );
    }, 3000);

    setTimeout(function makeZip() {
      zip.addLocalFolder(`/var/NewQrcode/server/img/${random}`);
      // get everything as a buffer
      var zipFileContents = zip.toBuffer();
      const fileName = "uploads.zip";
      const fileType = "application/zip";
      res.writeHead(200, {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": fileType,
      });
      return res.end(zipFileContents);
    }, 4000);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
