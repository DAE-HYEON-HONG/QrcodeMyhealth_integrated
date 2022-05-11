<template>
  <div>
    <div class="w-100 bannerColor" style="height: 300px;">
      <div class="m-auto banner h-100 string-middle d-flex">
        <div class="userName">
          <div class="d-flex">
            <p style="font-weight:600;">안녕하세요,</p>
            <p style="color:#2e77ef; font-weight:600" class="ml-1">관리자님!</p>
          </div>
          <p style="font-weight:600; font-size: 25px;">
            계정정보를<br />
            변경할 수 있어요!
          </p>
          <small style="color:#9d9d9d;">비밀번호를 알맞게 기입해주세요.</small>
        </div>
      </div>
    </div>
    <div class="m-auto w-75 pt-5">
      <form class="formDataBig">
        <div class="formData">
          <div class="userInfo1">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/21/21104.svg"
              alt=""
              class="imageSize"
            />
            <div class="userInfo2">
              <p style="font-weight: 600; font-size: 30px; margin-bottom: 0;">
                관리자
              </p>
              <small style="color:#a8a8a8; font-weight: 300;"
                >관리자전용공간입니다.</small
              >
            </div>
          </div>
          <div class="select">
            <hr />
            <router-link to="/admin">계정정보 변경취소</router-link>
            <hr />
          </div>
        </div>
        <div class="w-100">
          <div class="form-group re">
            <p
              class="mt-5 detail"
              style="margin-bottom:0; font-weight:600; font-size:20px;"
            >
              계정정보 변경
            </p>
            <hr />
            <div>
              <small>ID입력</small>
              <input type="text" class="illBtn2" v-model="id" />
              <small class="error">{{ idErr }}</small>
              <br />
              <small>비밀번호 입력</small>
              <input
                type="password"
                autocomplete="off"
                class="illBtn2"
                v-model="pw"
                placeholder="보안을 위해 특수문자를 넣어주세요."
              />
              <small class="error">{{ pwErr }}</small>
              <br />
              <small>비밀번호 확인</small>
              <input
                type="password"
                autocomplete="off"
                class="illBtn2"
                v-model="pw2"
              />
              <small class="error">{{ pwErr2 }}</small>
              <br />
              <button @click.prevent="onSubmit" class="btn btn-success mt-2">
                변경하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div style="height: 200px;"></div>
  </div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sequence9.com/server",
});
export default {
  data() {
    return {
      id: "",
      idErr: "",
      pwErr: "",
      pwErr2: "",
      pw: "",
      pw2: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.id === "") {
        alert("아이디가 비어있습니다.");
        this.idErr = "아이디가 비어 있습니다.";
      } else if (this.pw == "") {
        alert("비밀번호가 입력되지 않았습니다.");
        this.pwErr = "비밀번호가 입력되지 않았습니다.";
        this.idErr = "";
      } else if (this.pw2 == "") {
        alert("비밀번호 확인란에 비밀번호를 입력해주세요.");
        this.pwErr2 = "비밀번호 확인란에 비밀번호를 입력해주세요";
        this.pwErr = "";
      } else if (this.pw != this.pw2) {
        alert("비밀번호가 서로 맞지 않습니다.");
        this.pwErr2 = "비밀번호가 서로 맞지 않습니다.";
      } else {
        let formData = new FormData();
        formData.append("id", this.id);
        formData.append("pw", this.pw);
        instance.post("/UpdateAccount", formData).then((res) => {
          if (res.data === true) {
            alert("계정정보 변경이 완료되었습니다.");
            this.$router.push("/");
          } else {
            alert("데이터베이스에 오류가 있습니다.");
          }
        });
      }
    },
  },

  beforeMount() {
    this.$store.state.Navbar.Toggle =
      "Visible navbar navbar-expand-lg navbar-light bg-light";
    try {
      const tokenCheck = localStorage.getItem("jwt-token");
      if (tokenCheck !== null) {
        const token = localStorage.getItem("jwt-token");
        const formData = new FormData();
        formData.append("token", token);
        instance.post("/check_token", formData).then((res) => {
          if (res.data === false) {
            alert("세션이 만료되었거나 옳바르지 않은 접근입니다.");
            this.$router.push("/adminLogin");
          } else {
            instance.post("/check_token", formData).then((res) => {
              if (res.data === false) {
                alert(
                  "유저와 일치하는 정보가 없습니다. \n사이트관리자에게 문의 주세요."
                );
                this.$router.push("/adminLogin");
              } else {
                console.log(res.data);
              }
            });
          }
        });
      } else {
        alert("로그인이 필요합니다.");
        this.$router.push("/adminLogin");
      }
    } catch (err) {
      if (err.name === "jwt malformed") {
        alert("로그인이 필요합니다.");
        this.$router.push("/adminLogin");
      }
    }
  },
};
</script>

<style>
p {
  margin-bottom: 0;
}
.bannerColor {
  background: linear-gradient(-45deg, #e7f9fc, #ffeff7, #fff7dc);
}
.banner {
  width: 70% !important;
}
.string-middle {
  padding-top: 5rem !important;
}
.imageSize {
  width: 150px;
  height: 150px;
}
.userInfo1 {
  height: 150px;
}
.userInfo2 {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.formInfo {
  font-weight: 600;
  font-size: 30px;
}
.email {
  margin-left: 3rem;
}

.formDataBig {
  display: flex;
}
.re {
  margin-left: 3rem;
  width: 100%;
}
.select {
  margin-top: 6rem;
}
.inputNubmer {
  width: 100%;
  height: 30px;
  border-radius: 30px;
  border: 1px solid Black;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 1rem;
}
.UserUsed {
  text-align: center;
}
.error {
  color: red;
}
@media screen and (max-width: 991px) {
  .formData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .formDataBig {
    display: block;
  }
  .re {
    margin-left: 0;
  }
  .detail {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .userInfo1 {
    display: flex;
  }
  .select {
    margin-top: 2rem;
    width: 70%;
    text-align: center;
  }
  .sizeRebuild {
    font-size: 10px;
  }
  .QRcodeNumber {
    width: 58.8% !important;
  }
  .UseInfo {
    font-size: 10px;
    width: 15.69%;
  }
}
</style>
