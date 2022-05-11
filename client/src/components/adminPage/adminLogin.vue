<template>
  <div>
    <div class="w-100 bannerColor" style="height: 300px;">
      <div class="m-auto banner h-100 string-middle">
        <div class="d-flex">
          <p style="font-weight:600;">QRCODE</p>
          <p style="color:#2e77ef; font-weight:600">'s Login</p>
        </div>
        <p style="font-weight:600; font-size: 25px;">
          여기는<br />
          로그인을 할 수 있어요!
        </p>
        <small style="color:#9d9d9d;">아이디와 비밀번호를 입력해주세요.</small>
      </div>
    </div>
    <div class="m-auto w-75 pt-5">
      <form class="form-resize">
        <div class="form-group">
          <label>아이디</label><br />
          <div class="d-flex">
            <input
              type="text"
              class="formBar"
              v-model="$store.state.Login.id"
            />
          </div>
          <small style="color:red;">{{ $store.state.Login.idErr }}</small>
        </div>
        <div class="form-group">
          <label>비밀번호</label><br />
          <input
            type="password"
            class="formBar"
            v-model="$store.state.Login.pw"
          /><br />
          <small style="color:red;">{{ $store.state.Login.pwErr }}</small>
        </div>
        <div>
          <button @click.prevent="submit" class="btn btn-success  submit">
            로그인
          </button>
          <small style="color:red;">{{ $store.state.Login.notAccount }}</small>
          <small style="color:red;">{{ $t($store.state.Login.Token) }}</small>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sequence9.com/server",
});
export default {
  beforeMount() {
    this.$store.state.Navbar.Toggle =
      "Visible navbar navbar-expand-lg navbar-light bg-light";
  },
  methods: {
    submit() {
      try {
        if (this.$store.state.Login.id === "") {
          this.$store.state.Login.idErr = "아이디를 입력해주세요!";
        } else {
          if (this.$store.state.Login.pw === "") {
            this.$store.state.Login.idErr = "";
            this.$store.state.Login.pwErr = "비밀번호를 입력해주세요!";
          } else {
            this.$store.state.Login.idErr = "";
            this.$store.state.Login.pwErr = "";
            try {
              const formData = new FormData();
              formData.append("id", this.$store.state.Login.id);
              formData.append("pw", this.$store.state.Login.pw);
              instance.post("/adminLogin", formData).then((res) => {
                if (res.data === false) {
                  this.$store.state.Login.Token = "";
                  this.$store.state.Login.notAccount =
                    "아이디 또는 비밀번호가 올바르지 않습니다.";
                } else {
                  this.$store.state.Login.notAccount = "";
                  let result = res.data;
                  localStorage.setItem("jwt-token", result);
                  this.$store.state.Login.Token = "";
                  location.href =
                    "https://www.sequence9.com/yonomdle-sequence9";
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.bannerColor {
  background: linear-gradient(-45deg, #e7f9fc, #ffeff7, #fff7dc) !important;
}
.banner {
  width: 70% !important;
}
.string-middle {
  padding-top: 5rem !important;
}
.loginBtn {
  transition: ease 0.3s;
}
.submit {
  transition: ease 0.3s;
  width: 100%;
}
.formBar {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #dedede;
  outline: none;
  padding-left: 10px;
}
.formBar2 {
  width: 60%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #dedede;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
}
.formBar3 {
  width: 40%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #dedede;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
}
@media screen and (max-width: 1920px) {
  .signUp {
    display: flex;
  }
  .login {
    width: 50%;
  }
}
@media screen and (max-width: 791px) {
  .signUp {
    display: block;
  }
  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  /* .loginTitle{
        justify-content: center;
        text-align: center;
      } */
  .loginBtn {
    justify-content: center;
  }
  .submit {
    width: 100%;
  }
  /* .Update{
        display: flex;
        justify-content: center;
      }
      .UpdateList{
        justify-content: center;
        text-align: center;
        list-style: none;
      }  할까 말까 고민중*/
  .form-resize {
    padding-top: 1.5rem !important;
  }
}
</style>
