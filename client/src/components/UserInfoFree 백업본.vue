<template>
  <div>
    <div class="w-100" style="border-top: 4px solid #2e77ef;">
      <div class="realQR mt-5">
        <div class="realQRBox" style="overflow: auto; border-radius: 10px">
          <table>
            <tr>
              <th scope="row">{{ $t("사진") }}</th>
              <td>
                <div v-for="(picItems, index) in pic" :key="index">
                  <img :src="picItems" class="imgSize" /><br />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{{ $t("동영상") }}</th>
              <td>
                <div v-if="test != undefined">
                  <video controls autoplay name="media" class="video">
                    <source :src="video" type="video/mp4" />
                  </video>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{{ $t("텍스트") }}</th>
              <td>
                {{ text }}
              </td>
            </tr>
            <tr>
              <th scope="row">{{ $t("링크") }}</th>
              <td>
                <div>
                  <div v-for="linkItems in link" :key="linkItems">
                    {{ link }}
                  </div>
                </div>
              </td>
            </tr>
            <tr></tr>
          </table>

          <div class="w-100 centerBlock mt-3" style="height: 20%">
            <hr />
            <p>
              {{ $t("위 정보는 사용자에 의해 입력되었습니다.") }}<br />{{
                $t("정보의 정확성이 보장되는 것은 아닙니다.")
              }}
            </p>
          </div>
          <div
            class="pr-3 pb-3 w-100 d-flex align-items-end justify-content-end"
            style="height: 10%"
          >
            <router-link to="/reset" style="text-decoration: underline;">
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
      link: "",
      test: "",
    };
  },
  beforeMount() {
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
    this.link = this.$store.state.personInfo.link;
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
.realQRBox table {
  width: 100%;
}
.realQRBox th {
  width: 30%;
  vertical-align: top;
  padding-top: 10px;
  padding-left: 1rem;
  padding-bottom: 15px;
}
.realQRBox td {
  width: 70%;
  word-break: break-all;
}
.homebtn {
  transition: ease 0.3s;
}
.realQRBox {
  width: 400px;
  height: 600px;
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
  padding: 1rem 3rem 2rem 3rem;
  text-align: center;
}
hr {
  flex-grow: 1;
}
.imgSize {
  width: 100px;
  height: 100px;
}
.video {
  width: 200px;
  height: 100px;
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
</style>
