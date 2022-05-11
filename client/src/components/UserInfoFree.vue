<template>
  <div>
    <div class="w-100" style="border-top: 4px solid #2e77ef;">
      <div class="realQR mt-3" style="font-size: 18px;">
        <div class="realQRBox" style="overflow: auto;">
          <div class="d-flex" style="width: 100%; justify-content: center;">
            <span
              style="font-weight: 700; color: #333333; font-size: 22px; text-align: center;"
            >
              {{ $t("응급의료정보") }}
            </span>
          </div>
          <hr />
          <div class="FreeInfoBox">
            <div
              v-for="(picItems, index) in pic"
              :key="index"
              class="PictureBox"
            >
              <img :src="picItems" class="imgSize" /><br />
            </div>
            <div
              v-if="test != undefined"
              style="width: 80%; height: 160px; margin: 0 auto;"
              class="mt-4"
            >
              <video controls autoplay name="media" class="video">
                <source :src="video" type="video/mp4" />
              </video>
            </div>
            <div style="width: 80%; margin: 0 auto;" class="mt-5">
              <p>{{ text }}</p>
            </div>
            <div>
              <div style="width: 80%; margin: 0 auto;" class="mt-4">
                <div v-for="(linkItems, index) in link" :key="index">
                  <p
                    @click="Sites(link[index])"
                    style="color: #2e77ef; cursor: pointer"
                  >
                    {{ linkItems }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-100 centerBlock mt-3"
            style="height: 27%; color: #888888; font-size: 18px;"
          >
            <hr />
            <p style="text-align: center;">
              {{ $t("위 정보는 사용자에 의해 입력되었습니다.") }}<br />{{
                $t("정보의 정확성이 보장되는 것은 아닙니다.")
              }}
            </p>
          </div>
          <div
            class="pr-3 pb-3 w-100 d-flex align-items-end justify-content-end"
            style="height: 10%"
          >
            <router-link to="/reset" class="ChangeInfo">
              {{ $t("정보수정") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: [],
      video: "",
      text: "",
      link: [],
      test: "",
    };
  },
  beforeMount() {
    this.$store.state.Navbar.Toggle = "d-none";
    this.text = this.$store.state.personInfo.freeInfoText;
    let picN = this.$store.state.personInfo.pic;
    picN = picN.split(",");
    picN = picN.filter(function(item) {
      return item !== null && item !== "undefined" && item !== "";
    });
    if (picN.length != 0) {
      this.pic.push(picN[0]);
      if (picN[1] != undefined) {
        this.pic.push(picN[1]);
      }
      if (picN[2] != undefined) {
        this.pic.push(picN[2]);
      }
    }

    this.video = this.$store.state.personInfo.video;
    this.test = this.video;
    let Links = this.$store.state.personInfo.link.split(",");
    this.link = Links.slice();
    if (this.$store.state.Info.qrlist === "") {
      alert(this.$t("잘못된 경로입니다."));
      this.$router.push("/");
    }
  },
  methods: {
    Sites(linkItems) {
      window.location = linkItems;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.realQR {
  width: 100%;
  display: flex;
  justify-content: center;
}
.homebtn {
  transition: ease 0.3s;
}
.realQRBox {
  width: 400px;
  height: 700px;
}
.userInfo {
  display: flex;
}
.columnInfo {
  display: flex;
  flex-direction: column;
}
.infoTitle {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  width: 120px;
  padding-left: 1rem;
}
.centerBlock {
  padding: 1rem 3rem 4rem 3rem;
}
hr {
  flex-grow: 1;
}
.imgSize {
  width: 100%;
  /* height: 160px; */
  margin-top: 1rem;
}
.video {
  width: 100%;
  height: 160px;
  margin: 0 auto;
}
table {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
}
td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
}
.navbar {
  box-shadow: none !important;
}
.PictureBox {
  width: 80%;
  margin: 0 auto;
}
</style>
