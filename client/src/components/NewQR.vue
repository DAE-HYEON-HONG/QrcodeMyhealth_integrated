<template>
  <div>
    <div class="w-100 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px; overflow-x: auto"
        >
          <div
            class="mt-3 p-4 font-weight-bold"
            style="font-size: 22px; color: #333"
          >
            <span>{{ $t("정보입력방식을") }}</span>
            <span> {{ $t("선택해주세요.") }}</span>
            <hr />
          </div>
          <div class="show" style="font-size: 18px;">
            <div class="pl-4 pr-4">
              <button class="infoBtn" @click.prevent="embtn">
                {{ $t("응급정보입력") }}
              </button>
              <div class="mt-4">
                <p class="InfoTitle">
                  {{ $t("응급상황에 필요한 정보를 입력해주세요.") }}
                </p>
                <p class="InfoTitle">
                  {{ $t("응급상황에서 스캔하면") }}<br />{{
                    $t("입력된 응급정보를 활용할 수 있습니다.")
                  }}
                </p>
              </div>
            </div>
            <div class="mt-5 pl-4 pr-4">
              <button class="infoBtn" @click.prevent="freeBtn">
                {{ $t("자유형식 정보입력") }}
              </button>
              <div class="mt-4">
                <p class="InfoTitle">
                  {{ $t("자유형식정보 입력은") }}<br />{{
                    $t("이미지, 동영상 등을 활용할 수 있습니다")
                  }}
                </p>
                <br />
                <p class="InfoTitle">
                  {{ $t("이미지 최대3개 등록 가능(1MB)") }}<br />{{
                    $t("동영상 최대1개 등록 가능(5MB)")
                  }}
                </p>
                <div class="mt-4 d-flex">
                  <div class="checkbox">
                    <input
                      type="checkbox"
                      class="checkbox2"
                      v-model="checkedTF"
                    />
                  </div>
                  <div v-if="this.$i18n.locale == 'ko'">
                    <span>
                      <router-link to="/infoLaw" class="userLawlink">{{
                        $t("개인정보보호정책")
                      }}</router-link>
                      {{ $t("에 동의합니다") }}
                    </span>
                  </div>
                  <div v-else-if="this.$i18n.locale == 'en'">
                    <span>
                      {{ $t("개인정보보호정책") }}
                      <router-link to="/infoLawEN" class="userLawlink">
                        {{ $t("에 동의합니다") }}
                      </router-link>
                    </span>
                  </div>
                  <div v-else-if="this.$i18n.locale == 'ja'">
                    <span>
                      <router-link to="/infoLawJP" class="userLawlink">{{
                        $t("개인정보보호정책")
                      }}</router-link>
                      {{ $t("에 동의합니다") }}
                    </span>
                  </div>
                  <!-- <span>
                    <router-link to="/infoLaw" class="userLawlink">{{
                      $t("개인정보보호정책")
                    }}</router-link>
                    {{ $t("에 동의합니다") }}
                  </span> -->
                </div>
              </div>
            </div>
            <!-- 번역선택 기능 삭제됨. -->
            <!-- <div class="w-100 mt-4">
              <ul class="d-flex trans">
                <button @click="TEnglish" :class="English">
                  English
                </button>
                <span style="color: #f2f2f2;">|</span>
                <button @click="TKorean" :class="Korean">
                  한국어
                </button>
                <span style="color: #f2f2f2;">|</span>
                <button @click="TJapanese" :class="Japanese">
                  日本語
                </button>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.state.Navbar.Toggle = "d-none";
  },
  data() {
    return {
      click: "",
      clickAgain: "",
      checkedTF: false,
      English: "simpleBtn",
      Korean: "simpleBtn",
      Japanese: "simpleBtn",
    };
  },
  methods: {
    embtn() {
      if (this.checkedTF === false) {
        alert(this.$t("개인정보보호정책에 동의해주세요."));
      } else {
        this.$router.push("/emQR");
      }
    },
    freeBtn() {
      if (this.checkedTF === false) {
        alert(this.$t("개인정보보호정책에 동의해주세요."));
      } else {
        this.$router.push("/freeQR");
      }
    },
    TKorean() {
      this.$i18n.locale = "ko";
      this.Korean = "simpleBtn Opacity100";
      this.English = "simpleBtn";
      this.Japanese = "simpleBtn";
    },
    TEnglish() {
      this.$i18n.locale = "en";
      this.English = "simpleBtn Opacity100";
      this.Korean = "simpleBtn";
      this.Japanese = "simpleBtn";
    },
    TJapanese() {
      this.$i18n.locale = "ja";
      this.Japanese = "simpleBtn Opacity100";
      this.Korean = "simpleBtn";
      this.English = "simpleBtn";
    },
  },
  created() {
    this.$store.state.Navbar.Toggle = "d-none";
    let locale = navigator.language || navigator.userLanguege;
    locale = locale.substring(0, 2);
    if (locale === "ko") {
      this.$i18n.locale = "ko";
      this.Korean = "simpleBtn Opacity100";
      this.English = "simpleBtn";
      this.Japanese = "simpleBtn";
    } else if (locale === "en") {
      this.$i18n.locale = "en";
      this.English = "simpleBtn Opacity100";
      this.Korean = "simpleBtn";
      this.Japanese = "simpleBtn";
    } else if (locale === "ja") {
      this.$i18n.locale = "ja";
      this.Japanese = "simpleBtn Opacity100";
      this.Korean = "simpleBtn";
      this.English = "simpleBtn";
    }
    if (this.$store.state.Info.qrlist === "") {
      alert(this.$t("올바르지 않은 접근입니다."));
      this.$router.push("/");
    }
  },
};
</script>

<style>
.show {
  display: block;
  font-size: 20px !important;
}
.notshow {
  display: none;
}
.notQR {
  width: 100%;
  display: flex;
  justify-content: center;
}
.homebtn {
  transition: ease 0.3s;
}
.notQRBox {
  width: 400px;
  height: 725px;
}
.userLawlink {
  color: black;
  text-decoration: underline;
  margin-left: 0.5rem;
}
.userLawlink:hover {
  color: black;
}
.infoBtn {
  width: 100%;
  height: 50px;
  border: none;
  background-color: #2e77ef;
  color: white;
  border-radius: 5px;
}
.checkbox {
  height: 100%;
}
.checkbox2 {
  border-radius: 0;
  width: 15px;
  height: 15px;
  vertical-align: text-top;
}
.trans {
  list-style-type: none;
  width: 100%;
  padding-left: 2rem;
  padding-right: 3rem;
  justify-content: space-around;
  height: 50px;
  align-items: center;
}
.userInfoTitle {
  display: flex;
}
.backimg {
  width: 25px;
  height: 25px;
}
.simpleBtn {
  width: 67px;
  height: 38px;
  background-color: white;
  border: none;
  opacity: 0.5;
}
.InfoTitle {
  font-size: 18px;
  color: #888888;
  font-weight: 400;
}
</style>
