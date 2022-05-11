<template>
  <div>
    <div class="w-100">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px; overflow: auto;"
        >
          <div>
            <div class="mt-3 p-4 font-weight-bold" style="height: 10%">
              <div>
                <span
                  :class="mainTitle"
                  style="color: #333333; font-size: 22px;"
                >
                  {{ $t("정보를") }}
                </span>
                <span
                  :class="mainTitle"
                  style="color: #333333; font-size: 22px;"
                >
                  {{ $t("입력해주세요.") }}
                </span>
                <div :class="UseTitle" style="font-size: 22px; color: #333">
                  <span :class="UseTitle">{{ $t("저장된 정보를") }}</span>
                  <span :class="UseTitle">{{ $t("활용할까요?") }}</span>
                </div>
              </div>
              <hr />

              <div
                :class="UseSubtitle"
                style="font-size: 18px; color: #888; font-weight: 400;"
              >
                <p>
                  {{ $t("이미 저장된 정보가 있습니다") }}<br />{{
                    $t("기존 정보를 연결할까요?")
                  }}
                </p>
                <br />
                <button class="UseCookiesBtn mt-2" @click.prevent="UseCookies">
                  {{ $t("저장된 정보 연결하기") }}
                </button>
              </div>

              <div :class="NewInput">
                <div>
                  <div>
                    <!-- <p style="font-size: 14px; color: #888; font-weight: 400;">
                      {{ $t("저장된 정보를 연결하면 기존에 입력하신") }}<br />{{
                        $t("정보가 연결되어 저장됩니다")
                      }}
                    </p> -->
                    <!-- <br /> -->
                    <p style="font-size: 18px; color: #888; font-weight: 400;">
                      {{ $t("새로운 정보를 입력하시고자 하는 경우에는")
                      }}<br />{{ $t("새로 입력하기를 선택해주세요") }}
                    </p>
                    <button
                      class="UseCookiesBtn mt-4"
                      @click.prevent="dontuseCookies"
                      style="font-size: 18px;"
                    >
                      {{ $t("새로 입력하기") }}
                    </button>
                  </div>
                </div>
              </div>
              <div :class="main">
                <div class="freeIconBtn">
                  <div class="freeIconBtnList-items">
                    <div
                      style="opacity: 50%; width: 20%; display: flex; flex-direction: column; align-items: center"
                      :class="PicBtn"
                    >
                      <button class="btnSize d-flex" @click.prevent="picUpload">
                        <img
                          src="./img/pic.png"
                          alt="사진 업로드"
                          class="uploadIcon"
                        />
                        <div :class="picUse">
                          <img
                            src="./img/use.png"
                            alt=""
                            class="uploadIconUse"
                          />
                        </div>
                      </button>
                      <!-- <small style="font-size: 12px;" class="mt-1">{{
                        $t("사진")
                      }}</small> -->
                    </div>
                    <div
                      style="opacity: 50%; width: 20%; display: flex; flex-direction: column; align-items: center"
                      :class="VideoBtn"
                    >
                      <button
                        class="btnSize d-flex"
                        @click.prevent="videoUpload"
                      >
                        <img
                          src="./img/video.png"
                          alt="비디오 업로드"
                          class="uploadIcon"
                        />
                        <div :class="videoUse">
                          <img
                            src="./img/use.png"
                            alt=""
                            class="uploadIconUse"
                          />
                        </div>
                      </button>
                      <!-- <small style="font-size: 12px;" class="mt-1">{{
                        $t("영상")
                      }}</small> -->
                    </div>
                    <div
                      style="opacity: 50%; width: 20%; display: flex; flex-direction: column; align-items: center"
                      :class="TextBtn"
                    >
                      <button
                        class="btnSize d-flex"
                        @click.prevent="textUpload"
                      >
                        <img
                          src="./img/text.png"
                          alt="텍스트 업로드"
                          class="uploadIcon"
                        />
                        <div :class="textUse">
                          <img
                            src="./img/use.png"
                            alt=""
                            class="uploadIconUse"
                          />
                        </div>
                      </button>
                      <!-- <small style="font-size: 12px;" class="mt-1">{{
                        $t("글귀")
                      }}</small> -->
                    </div>
                    <div
                      style="opacity: 50%; width: 20%; display: flex; flex-direction: column; align-items: center"
                      :class="LinkBtn"
                    >
                      <button
                        class="btnSize d-flex"
                        @click.prevent="fileUpload"
                      >
                        <img
                          src="./img/file.png"
                          alt="링크 업로드"
                          class="uploadIcon"
                        />
                        <div :class="fileUse">
                          <img
                            src="./img/use.png"
                            alt=""
                            class="uploadIconUse"
                          />
                        </div>
                      </button>
                      <!-- <small style="font-size: 12px;" class="mt-1">{{
                        $t("링크")
                      }}</small> -->
                    </div>
                  </div>
                </div>
                <hr />
                <div id="img" :class="imgBox" style="font-size: 16px;">
                  <input
                    type="file"
                    accept=".jpg, .png"
                    class="notshow"
                    @change="UploadPic"
                    id="photo"
                    ref="picFile1"
                  />
                  <label for="photo" class="PicButton">{{
                    $t("업로드")
                  }}</label>
                  <div v-for="(PicList, index) in picName" :key="index">
                    <p>{{ PicList }}</p>
                  </div>
                </div>
                <div id="videoList" :class="videoBox" style="font-size: 16px;">
                  <input
                    type="file"
                    accept="video/*"
                    class="notshow"
                    @change="UploadVideo"
                    id="video"
                    ref="videoFile"
                  />
                  <label for="video" class="PicButton">{{
                    $t("업로드")
                  }}</label>
                  <p
                    style="display: flex;
                          align-items: center;
                          margin-left: 1rem;
                          margin-bottom: .5rem;"
                  >
                    {{ VideoName }}
                  </p>
                </div>
                <div id="text" :class="textBox" style="font-size: 16px;">
                  <input
                    type="text"
                    maxlength="300"
                    class="freeInfo"
                    :placeholder="$t('내용을 입력해주세요')"
                    size="10"
                    v-model="freeInfoText"
                    @keyup="SaveText"
                  />
                </div>
                <div id="link" :class="fileBox" style="font-size: 16px;">
                  <input
                    type="text"
                    class="illBtn2"
                    :placeholder="$t('링크를 삽입해주세요')"
                    v-model="link1"
                    @keyup="SaveLink"
                  />
                  <input
                    type="text"
                    class="illBtn2"
                    :placeholder="$t('링크를 삽입해주세요')"
                    v-model="link2"
                    @keyup="SaveLink"
                  />
                  <input
                    type="text"
                    class="illBtn2"
                    :placeholder="$t('링크를 삽입해주세요')"
                    v-model="link3"
                    @keyup="SaveLink"
                  />
                </div>
                <small :class="PicColorText">{{
                  $t("이미지 최대 3개(1M) 및")
                }}</small
                ><br />
                <small :class="VideoColorText">{{
                  $t("동영상 최대 1개(5M) 등록 가능합니다.")
                }}</small
                ><br />
                <small :class="TextColorText">{{
                  $t("글은 최대 300자까지 입력 가능합니다.")
                }}</small
                ><br />

                <div class="mt-4 mb-4" style="font-size: 19px;">
                  <div class="mt-3 font-weight-bold" style="height: 10%">
                    <div class="d-flex">
                      <p>{{ $t("비밀번호") }}</p>
                    </div>
                  </div>
                  <div class="mt-1">
                    <div>
                      <div>
                        <input
                          type="number"
                          :placeholder="$t('비밀번호 입력')"
                          class="PwBtn"
                          v-model="pw"
                        />
                        <small style="color: red;">{{ $t(pc) }}</small>
                        <input
                          type="number"
                          :placeholder="$t('비밀번호 확인')"
                          class="PwBtn"
                          v-model="pw2"
                        />
                        <small style="color: red;">{{ $t(pc2) }}</small>
                        <br />
                        <div
                          class="mt-1"
                          style="color: #888888; font-size: 19px;"
                        >
                          <small>{{
                            $t("비밀번호는 4자리 숫자로 가능합니다")
                          }}</small
                          ><br /><small>{{
                            $t("비밀번호는 관리자도 알 수 없습니다")
                          }}</small
                          ><br />
                          <small>{{
                            $t("비밀번호를 분실 시 수정이 불가능합니다")
                          }}</small
                          ><br />
                        </div>
                        <br />
                      </div>
                      <button
                        class="btn btn-primary w-100"
                        @click="onSubmit"
                        style="width: 320px; height: 48px; background-color: #2E77EF; font-size: 19px;"
                      >
                        {{ $t("완료") }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    this.TextBtn = "Opacity100";
    this.$store.state.Navbar.Toggle = "d-none";
    let letChkCookies = this.$cookies.get("QRCODE_InfoText");
    if (letChkCookies !== null) {
      this.mainTitle = "notshow";
      this.main = "notshow";
      this.UseTitle = "";
      this.NewInput = "mt-5";
    } else {
      this.mainTitle = "";
      this.main = "";
      this.UseTitle = "notshow";
      this.UseSubtitle = "notshow";
      this.NewInput = "notshow";
    }
    if (this.$store.state.Info.qrlist === "") {
      alert(this.$t("잘못된 경로입니다."));
      this.$router.push("/");
    }
  },
  data() {
    return {
      //저장된 정보
      mainTitle: "",
      main: "",
      UseTitle: "notshow",
      UseSubTitle: "",
      NewInput: "notshow",
      //내용
      picName: [],
      Picfile: [],
      PicUrl: "",
      VideoFile: "",
      VideoName: "",
      link1: "",
      link2: "",
      link3: "",
      freeInfoText: "",
      pw: "",
      pw2: "",
      PicBtn: "",
      VideoBtn: "",
      TextBtn: "Opacity100",
      LinkBtn: "",
      //실행상태
      picUse: "usingIcon notshow",
      videoUse: "usingIcon notshow",
      textUse: "usingIcon",
      fileUse: "usingIcon notshow",
      //파일 넣는 상태
      imgBox: "notshow",
      videoBox: "notshow d-flex",
      textBox: "show",
      fileBox: "notshow",
      //텍스트 색상 바꾸기
      PicColorText: "TextColor",
      VideoColorText: "TextColor",
      TextColorText: "TextColor",
      LinkColorText: "TextColor",
      //에러
      pc: "",
      pc2: "",
    };
  },

  methods: {
    ColorChk() {
      if (this.Picfile.length != 0) {
        this.PicColorText = "TextColor blueFont2";
      }
      if (this.VideoFile.length != 0) {
        this.VideoColorText = "TextColor blueFont2";
      }
      if (this.freeInfoText != "") {
        this.TextColorText = "TextColor blueFont2";
      }
      if (this.link1 != "") {
        this.LinkColorText = "TextColor blueFont2";
      }
      if (this.link2 != "") {
        this.LinkColorText = "TextColor blueFont2";
      }
      if (this.link3 != "") {
        this.LinkColorText = "TextColor blueFont2";
      }
      if (this.freeInfoText == "") {
        this.TextColorText = "TextColor";
      }
      if (this.link1 == "") {
        this.LinkColorText = "TextColor";
      }
      if (this.link2 == "") {
        this.LinkColorText = "TextColor";
      }
      if (this.link3 == "") {
        this.LinkColorText = "TextColor";
      }
    },
    picUpload() {
      this.picUse = "usingIcon";
      this.videoUse = "usingIcon notshow";
      this.textUse = "usingIcon notshow";
      this.fileUse = "usingIcon notshow";
      this.imgBox = "show";
      this.videoBox = "notshow";
      this.textBox = "notshow";
      this.fileBox = "notshow";
      this.PicBtn = "Opacity100";
      this.VideoBtn = "";
      this.TextBtn = "";
      this.LinkBtn = "";
    },
    videoUpload() {
      this.picUse = "usingIcon notshow";
      this.videoUse = "usingIcon";
      this.textUse = "usingIcon notshow";
      this.fileUse = "usingIcon notshow";
      this.imgBox = "notshow";
      this.videoBox = "show d-flex";
      this.textBox = "notshow";
      this.fileBox = "notshow";
      this.VideoBtn = "Opacity100";
      this.PicBtn = "";
      this.TextBtn = "";
      this.LinkBtn = "";
    },
    textUpload() {
      this.picUse = "usingIcon notshow";
      this.videoUse = "usingIcon notshow";
      this.textUse = "usingIcon";
      this.fileUse = "usingIcon notshow";
      this.imgBox = "notshow";
      this.videoBox = "notshow";
      this.textBox = "show";
      this.fileBox = "notshow";
      this.TextBtn = "Opacity100";
      this.VideoBtn = "";
      this.PicBtn = "";
      this.LinkBtn = "";
    },
    fileUpload() {
      this.picUse = "usingIcon notshow";
      this.videoUse = "usingIcon notshow";
      this.textUse = "usingIcon notshow";
      this.fileUse = "usingIcon";
      this.imgBox = "notshow";
      this.videoBox = "notshow";
      this.textBox = "notshow";
      this.fileBox = "show";
      this.LinkBtn = "Opacity100";
      this.VideoBtn = "";
      this.TextBtn = "";
      this.PicBtn = "";
    },
    UploadPic(e) {
      if (e.target.files[0].size > 5000000) {
        alert(this.$t("5MB가 넘는 사진입니다. 다른 사진을 선택해주세요."));
      } else {
        this.Picfile.push(this.$refs.picFile1.files[0]);
        this.picName.push(this.$refs.picFile1.files[0].name);
        this.ColorChk();
      }
    },
    UploadVideo(e) {
      if (e.target.files[0].size > 10000000) {
        alert(
          this.$t("영상의 용량이 10MB가 넘습니다. 다른 영상파일을 선택해주세요")
        );
      } else {
        this.VideoFile = e.target.files[0];
        this.VideoName = e.target.files[0].name;
        this.ColorChk();
      }
    },
    SaveText() {
      this.$cookies.set("QRCODE_InfoText", this.freeInfoText);
      this.ColorChk();
    },
    SaveLink() {
      this.$cookies.set("QRCODE_Link1", this.link1);
      this.$cookies.set("QRCODE_Link2", this.link2);
      this.$cookies.set("QRCODE_Link3", this.Link3);
      this.ColorChk();
    },
    dontuseCookies() {
      this.mainTitle = "";
      this.main = "";
      this.UseTitle = "notshow";
      this.UseSubtitle = "notshow";
      this.NewInput = "notshow mt-5";
    },
    UseCookies() {
      this.freeInfoText = this.$cookies.get("QRCODE_InfoText");
      this.link1 = this.$cookies.get("QRCODE_Link1");
      this.link2 = this.$cookies.get("QRCODE_Link2");
      this.link3 = this.$cookies.get("QRCODE_Link3");
      this.mainTitle = "";
      this.main = "";
      this.UseTitle = "notshow";
      this.UseSubtitle = "notshow";
      this.NewInput = "notshow mt-5";
    },
    onSubmit() {
      console.log(this.VideoFile);
      if (this.freeInfoText === "") {
        alert(this.$t("적어도 텍스트는 입력해주셔야합니다."));
      } else if (this.Picfile.length > 3) {
        alert(this.$t("사진은 최대 3장까지 업로드 가능합니다."));
      } else if (this.VideoFile.length > 2) {
        alert(this.$t("동영상은 최대 1개까지만 업로드가 가능합니다."));
      } else if (this.pw === "") {
        alert(this.$t("비밀번호를 입력해주세요."));
        this.pc = "필수 입력항목입니다.";
      } else if (this.pw2 === "") {
        alert(
          this.$t("비밀번호 재확인을 위해 확인란에 비밀번호를 입력해주세요.")
        );
        this.pc2 = "필수 입력항목입니다.";
        this.pc = "";
      } else if (this.pw.length !== 4) {
        alert(this.$t("비밀번호가 4자리가 아닙니다."));
      } else if (this.pw !== this.pw2) {
        alert(this.$t("비밀번호가 일치하지 않습니다."));
      } else {
        alert(
          this.$t(
            "변경되었습니다. 확인을 누르면 자동으로 홈으로 이동되니 잠시만 기다려주십시오.."
          )
        );
        let link = [];
        link.push(this.link1);
        link.push(this.link2);
        link.push(this.link3);
        let formData = new FormData();
        formData.append("picFile1", this.Picfile[0]);
        formData.append("picFile1", this.Picfile[1]);
        formData.append("picFile1", this.Picfile[2]);
        formData.append("videoFile", this.VideoFile);
        formData.append("Link", link);
        formData.append("qrData", this.$store.state.Info.qrlist);
        formData.append("freeInfoText", this.freeInfoText);
        formData.append("pw", this.pw);
        instance
          .post("/freeQRUpload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.data === true) {
              this.$router.push("/");
            }
          });
      }
    },
  },
};
</script>

<style>
* {
  transition: ease 0.3s;
}
.notshow {
  display: none !important;
}
.show {
  display: block;
}
.notQRBox {
  -ms-overflow-style: none;
}
.notQRBox::-webkit-scrollbar {
  display: none;
}
.illBtn {
  width: 100%;
  height: 40px;
  margin-top: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.illBtn2 {
  width: 100%;
  height: 40px;
  margin-top: 0px;
  margin-bottom: 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-align: left !important;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.freeInfo {
  width: 100%;
  height: 120px;
  border-radius: 5px;
  background-color: #f2f2f2;
  border: none;
  padding: 0.5rem;
}
.uploadIcon {
  width: 20px;
  height: 20px;
}
.btnSize {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.btnSize:focus {
  outline: none;
}
.usingIcon {
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 5px;
}
.uploadIconUse {
  width: 8px;
  height: 8px;
}
.freeIconBtn {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.freeIconBtnList-items {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.Opacity100 {
  opacity: 1 !important;
}
.blueFont {
  color: white !important;
}
.blueFont2 {
  color: #2e77ef !important;
}
.PicButton {
  width: 110px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #2e77ef;
  border-radius: 5px;
  color: #2e77ef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
}
.TextColor {
  font-weight: 400;
  font-size: 16px;
  color: #888888;
}
.PwBtn {
  width: 100%;
  height: 44px;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding-left: 0.5rem;
  border: none;
  margin-top: 0.5rem;
}
.UseCookiesBtn {
  width: 100%;
  height: 44px;
  background-color: #2e77ef;
  border: none;
  border-radius: 5px;
  color: white;
}
</style>
