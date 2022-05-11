const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const adminLogin = require("./routes/loginAdmin");
const checkToken = require("./routes/checkToken");
const checkInfo = require("./routes/checkInfo");
const qrlist = require("./routes/qrcodelist");
const emQRAdd = require("./routes/emQRUpload");
const meQrlist = require("./routes/meQrlist");
const resetN = require("./routes/resetN");
const reset = require("./routes/reset");
const MakeQR = require("./routes/MakeQR");
const freeQR = require("./routes/freeQRUpload");
const UpdateAccount = require("./routes/UpdateAccount");
const showYear = require("./routes/showYear");

let corsOption = {
  // origin: "https://hong4383.r-e.kr",
  origin: "https://localhost:8080",
  credentials: true,
};

const app = express();
app.use(cors(corsOption));
app.use(
  "//var/NewQrcode/uploads",
  express.static(path.join(__dirname, "../uploads"))
);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
const port = 9000;
const connection = require("./config/mysql");

app.post("/adminLogin", adminLogin);
app.post("/check_token", checkToken);
app.post("/check_Info", checkInfo);
app.post("/qrlist", qrlist);
app.post("/emQRUpload", emQRAdd);
app.post("/meQrlist/:id", meQrlist);
app.post("/resetN", resetN);
app.post("/reset", reset);
app.post("/MakeQR", MakeQR);
app.post("/freeQRUpload", freeQR);
app.post("/UpdateAccount", UpdateAccount);
app.post("/showYear", showYear);

app.listen(port, (err) => {
  console.log(`현재 이 서버는 ${port}로 작동 중입니다.`);
  if (err) {
    return console.log(
      `${port}번호가 다른 프로세스에서 사용중인지 확인해주세요.`
    );
  }
});
