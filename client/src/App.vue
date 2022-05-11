<template>
  <div style="height: 100%;">
    <div id="body">
      <nav :class="$store.state.Navbar.Toggle">
        <div class="m-auto navigator">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            <p class="logo">
              <img
                src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/logo.png"
                alt=""
                class="logo"
              />
            </p>
          </router-link>

          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto">
              <!-- <router-link
                to="/qrScan"
                class="nav-link"
                style="font-size: 14px;padding-bottom: 5px; color:#404040;"
              >
                {{ $t("QR코드 스캔") }}
              </router-link> -->
              <!-- <router-link style="font-size: 14px;" to="/" class="nav-link">
                {{ $t("뭐 넣을지 고민중") }}
              </router-link> -->
            </div>
            <form class="form-inline my-2 my-lg-0">
              <!-- <input type="text" :value="this.$store.state.Navbar.searchData" class="searchBox mr-sm-2 notShow">
                <button class="btnSearch my-2 my-sm-0 notShow" type="submit" @click="search">{{$t('검색')}}</button> -->
            </form>
            <!-- <router-link
              :class="this.$store.state.Navbar.logstatus"
              to="/adminLogin"
              style="text-decoration: none; color:#1991e0;"
              >{{ $t("로그인") }}</router-link
            > -->
            <button
              :class="this.$store.state.Navbar.logClass"
              @click="logout"
              style="padding: 0; color: #e31437;"
            >
              {{ $t("로그아웃") }}
            </button>
            <button
              :class="this.$store.state.Navbar.logClass"
              @click="adminPage"
              style="text-decoration: none; color:#404040;"
            >
              {{ $t("관리자페이지") }}
            </button>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
    <!-- 아래 copyrights삭제. 다시 추가됨. -->
    <div class="d-flex" style="align-items: end;">
      <footer style="width: 100%;">
        <nav
          class="d-flex"
          style="height: 70px; justify-content: space-around; height: 70px; background-color: #e8e8e8; align-items: center;"
        >
          <!-- <div>
            <img src="" alt="" />
          </div> -->
          <div>
            <!-- <router-link to="/UseLaw">
              Copyrights©2019 All ri.ghts reserved.
            </router-link> -->
            <p>
              Copyrights©2019 All rights reserved.
            </p>
          </div>
          <!-- <div class="LangBox">
            <label class="LangBtn" for="langToggle">
              <img
                src="https://www.sequence9.com/server//var/NewQrcode/uploads/translate.png"
                class="langIcon"
              />
            </label>
            <input
              type="checkbox"
              class="d-none"
              id="langToggle"
              v-model="isActive"
              @change="selectLang"
            />
            <div :class="langSelectBox" id="langSelectBox">
              <button class="LangSelectBtn" @click.prevent="Korean">
                한국어
              </button>
              <hr class="m-0" />
              <button class="LangSelectBtn" @click.prevent="English">
                English
              </button>
              <hr class="m-0" />
              <button class="LangSelectBtn" @click.prevent="Japanese">
                日本語
              </button>
            </div>
          </div> -->
        </nav>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sequence9.com/server",
});

export default {
  created() {
    try {
      const tokenCheck = localStorage["jwt-token"];
      let locale = navigator.language || navigator.userLanguege;
      locale = locale.substring(0, 2);
      if (locale === "ko") {
        this.$i18n.locale = "ko";
      } else if (locale === "en") {
        this.$i18n.locale = "en";
      } else if (locale === "ja") {
        this.$i18n.locale = "ja";
      }

      if (tokenCheck !== null) {
        const token = localStorage.getItem("jwt-token");
        const formData = new FormData();
        formData.append("token", token);
        instance.post("/check_token", formData).then((res) => {
          if (res.data == "Expired") {
            this.$store.state.Login.Token = this.$t(
              "세션이 만료되었습니다. 다시 로그인해주세요."
            );
          }
          if (res.data === true) {
            this.$store.state.Navbar.logClass = "lo show";
            this.$store.state.Navbar.logstatus = "lo notShow";
          } else {
            this.$store.state.Navbar.logClass = "lo notShow";
            this.$store.state.Navbar.logstatus = "lo show";
          }
        });
      } else {
        this.$store.state.Navbar.logstatus = "lo show";
        this.$store.state.Navbar.logClass = "lo notShow";
      }
    } catch (err) {
      console.log(err);
      if (err.name === "jwt malformed") {
        this.$store.state.Navbar.logstatus = "lo show";
        this.$store.state.Navbar.logClass = "lo notShow";
      }
    }
    window.addEventListener("click", () => {
      if (!this.langToggle) {
        this.selectLangOutside();
      }
    });
    console.log(
      "%c 잠깐만 기다려주세요!",
      "font-size:50px; color:#ff0167; border: 1px solid #003cff; no-repeat center;"
    );
    console.warn(
      "이 기능은 개빌자를 위해 제작된 기능입니다.\n다른 사람이 정보를 여기에 요청하는 것은 개인정보를 탈취하기 위한 목적이니\n개발자 외엔 절대로 이곳에 텍스트를 쓰지 마세요!"
    );
    let agent = navigator.userAgent.toLowerCase();
    if (
      (navigator.appName == "Netscape" &&
        navigator.userAgent.search("Trident") != -1) ||
      agent.indexOf("msie") != -1
    ) {
      alert(
        "Internet Explorer은 지원되지 않습니다.\n크롬을 설치하여 사용해주시기 바랍니다."
      );
    }
  },
  data() {
    return {
      langToggle: document.getElementById("langToggle"),
      langue: "언어선택",
      langSelectBox: "LangSelectBox visi-h",
      isActive: false,
    };
  },
  methods: {
    logout() {
      try {
        localStorage.removeItem("jwt-token");
        this.logstatus = "lo show";
        this.logClass = "lo notShow";
        location.href = "https://www.sequence9.com";
      } catch (err) {
        console.log(err);
      }
    },
    adminPage() {
      location.href = "https://www.sequence9.com/yonomdle-sequence9";
    },
    selectLangInside() {
      this.isActive = true;
    },
    selectLangOutside() {
      this.isActive = false;
      this.selectLang();
    },
    selectLang() {
      if (this.isActive == false) {
        this.langSelectBox = "LangSelectBox visi-h";
      } else {
        this.langSelectBox = "LangSelectBox visi-v";
      }
    },
    Korean() {
      this.$i18n.locale = "ko";
    },
    English() {
      this.$i18n.locale = "en";
    },
    Japanese() {
      this.$i18n.locale = "ja";
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#body {
  min-height: 100%;
}
.show {
  display: block;
}
.notShow {
  display: none;
}
.logo {
  /* margin-bottom: inherit;
  color: #2e77ef;
  font-weight: 600; */
  width: 110px;
  height: 38px;
}
.lo {
  font-size: 14px;
  border: none;
  background-color: transparent;
  color: #2e77ef;
  cursor: pointer;
  margin-right: 1rem;
}
.lo:nth-of-type(2) {
  margin-right: 0;
}
.lo:focus {
  outline: none;
}
.navigator {
  display: flex;
  width: 75%;
}
.searchBox {
  width: 200px;
  height: 35px;
  border: 1px solid #dedede;
  border-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
}
.btnSearch {
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 30px;
  background-color: #2e77ef;
  color: white;
  animation: fade ease 3s;
  transition: ease 0.3s;
}
.btnSearch:hover {
  background-color: #346cc8;
  cursor: pointer;
}
.btnSearch:focus {
  outline: none;
}
.langIcon {
  width: 20px;
  height: 20px;
}
.LangBtn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.LangSelectBtn {
  border: none;
  background-color: transparent;
}
.LangSelectBtn:focus {
  outline: none;
}
.LangSelectBox {
  width: 74px;
  height: 100px;
  line-height: 33px;
  position: absolute;
  bottom: 60px;
  right: 0px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 16px -4px;
  text-align: center;
  border-radius: 10px;
  transition: all 0.3s;
}
.LangBox {
  position: relative;
}
.notQRBox {
  margin-top: 2rem;
  border: none !important;
}
.realQRBox {
  border: none !important;
}
.visi-h {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.3s, opacity 0.3s linear;
}
.visi-v {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s linear;
}
@media screen and (max-width: 992px) {
  .navbar {
    box-shadow: 0px 10px 30px #a9a9a9;
  }
  .navigator {
    display: block;
    width: 100%;
  }
  .logo {
    margin-left: 1rem;
  }
  .lo {
    margin-top: 10px;
    padding: 0;
  }
  .lo:nth-of-type(1) {
    margin-top: 0;
  }
  .notQRBox {
    margin-top: 0;
  }
}
</style>
