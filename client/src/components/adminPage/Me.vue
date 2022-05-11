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
            사용자 정보를<br />
            조회할 수 있어요!
          </p>
          <small style="color:#9d9d9d;">비밀번호는 공개되지 않습니다.</small>
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
            <router-link to="/UpdateAccount">계정정보 변경하기</router-link>
            <hr />
          </div>
        </div>
        <div class="w-100">
          <div class="form-group re">
            <p
              class="mt-5 detail"
              style="margin-bottom:0; font-weight:600; font-size:20px;"
            >
              QR코드 생성
            </p>
            <hr />

            <div class="mt-2">
              <label style="font-weight:400; margin-bottom: 0; color: #979797;"
                >QR코드 발급 수량</label
              ><br />
              <input type="number" v-model="qrlist" class="inputNubmer" /><br />
              <div class="d-flex w-100 justify-content-end">
                <button
                  @click.prevent="QRcodeDown"
                  class="btn btn-success mt-2"
                  style="font-size: 12px;"
                >
                  발급하기
                </button>
              </div>
            </div>
          </div>
          <div class="form-group re">
            <select
              v-model="yearSelect"
              @change.prevent="reloadUser"
              class="YearselectBox"
            >
              <option
                v-for="yearItems in year"
                :key="yearItems.year"
                :value="yearItems.year"
              >
                {{ yearItems.year }}
              </option>
            </select>
            <table style="overflow-x: auto; margin: 0 auto;" id="qrCOde">
              <tr>
                <th
                  style="width: 25%; height: 40px; padding-left: 11px;"
                  class="QRcodeNumber"
                >
                  발급일
                </th>
                <th
                  style="width: 25%; height: 40px; text-align:center"
                  class="maximum"
                >
                  수량
                </th>
                <th
                  style="width: 25%; height: 40px; text-align:center"
                  class="list"
                >
                  리스트 다운받기
                </th>
                <th
                  style="width: 25%; height: 40px; text-align:center"
                  class="explainQR"
                >
                  비고
                </th>
              </tr>
              <tr v-for="(users, index) in qrData" :key="index">
                <td class="qrlist">
                  {{ users.qr_date }}
                </td>
                <td
                  style="vertical-align: inherit; border-bottom: 1px solid #ccc; text-align: center;"
                >
                  <!-- <div v-if="users.used == 0" class="UserUsed">
                    사용가능
                  </div>
                  <div v-else class="UserUsed">
                    사용중
                  </div> -->
                  {{ users.qr_max }}
                </td>
                <td class="UseQR">
                  <button
                    class="btn btn-success sizeRebuild"
                    @click.prevent="MakeQRNow(users.qr_file)"
                  >
                    다운로드
                  </button>
                </td>
                <td class="UseQR">
                  <input
                    type="text"
                    class="Explain"
                    v-model="users.qr_explain"
                  />
                  <div style="position: relative;">
                    <!-- prettier-ignore -->
                    <button
                      class="btn btn-success sizeRebuild2"
                      @click.prevent="ChangeExplain(users.qr_explain, users.location)"
                    >
                      ✓
                    </button>
                  </div>
                </td>
              </tr>
            </table>

            <infinite-loading
              @infinite="InfiniteHandler"
              ref="infiniteLoading"
              spinner="waveDots"
            >
              <div
                class="mt-2"
                slot="no-more"
                style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px;"
              >
                더 이상 없습니다.
              </div>
            </infinite-loading>
          </div>
        </div>
      </form>
    </div>
    <div style="height: 200px;"></div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";
import download from "downloadjs";

const instance = axios.create({
  baseURL: "https://www.sequence9.com/server",
});
export default {
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      QRcode: "",
      qrlist: "",
      limit: 0,
      qrData: [],
      year: [],
      yearSelect: "2020",
    };
  },
  beforeMount() {
    this.$store.state.Navbar.Toggle =
      "Visible navbar navbar-expand-lg navbar-light bg-light";
    instance.post("/showYear").then((res) => {
      this.year = res.data;
    });
    let formData1 = new FormData();
    formData1.append("year", this.yearSelect);
    instance.post("/meQRlist/" + this.limit, formData1).then((res) => {
      this.qrData = this.qrData.concat(res.data);
    });
  },
  methods: {
    QRcodeDown() {
      if (this.qrlist == "") {
        alert("숫자를 입력해주세요.");
      } else if (this.qrlist == "0") {
        alert(`${this.qrlist}개로 발급이 불가능합니다.`);
      } else {
        let formData = new FormData();
        formData.append("qrlist", this.qrlist);
        instance
          .post("/qrlist", formData, { responseType: "arraybuffer" })
          .then((res) => {
            download(res.data, "qrData.csv", "application/zip");
          });
        alert(
          "발급신청이 완료되었습니다.\n서버의 따라 시간이 다소 소요 될 수 있습니다."
        );
      }
    },
    reloadInfinite() {
      this.$refs.infiniteLoading.stateChanger.reset();
      this.reloadScroll();
    },
    reloadScroll() {
      let location = document.querySelector("#qrCOde").offsetTop;
      window.scrollTo({ top: location, behavior: "smooth" });
    },
    reloadUser() {
      let formData = new FormData();
      formData.append("year", this.yearSelect);
      this.limit = 0;
      this.qrData.splice(0);
      instance.post("/meQRlist/" + this.limit, formData).then((res) => {
        this.qrData = this.qrData.concat(res.data);
      });
      window.setTimeout(this.reloadInfinite.bind(this), 300);
    },
    InfiniteHandler($state) {
      let formData2 = new FormData();
      formData2.append("year", this.yearSelect);
      instance
        .post("/meQRlist/" + (this.limit + 10), formData2)
        .then((res) => {
          setTimeout(() => {
            if (res.data.length) {
              this.qrData = this.qrData.concat(res.data);
              $state.loaded();
              this.limit += 10;
            } else {
              $state.complete();
            }
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    MakeQRNow(send) {
      const QrUrl = send;
      // const DownLink = `https://www.sequence9.com/server/${QrUrl}`;
      let formData = new FormData();
      formData.append("qrlist", QrUrl);
      instance
        .post("/MakeQR", formData, { responseType: "blob" })
        .then((res) => {
          download(res.data, "/QRCODElist.csv", "text/csv");
        });
    },
    ChangeExplain(send, location) {
      let changeEx = new FormData();
      changeEx.append("text", send);
      changeEx.append("location", location);
      instance.post("/ChangeEx", changeEx).then((res) => {
        if (res.data) {
          alert("변경되었습니다.");
        }
      });
    },
  },

  created() {
    try {
      const tokenCheck = localStorage.getItem("jwt-token");
      if (tokenCheck !== null) {
        const token = localStorage.getItem("jwt-token");
        const formData = new FormData();
        formData.append("token", token);
        instance.post("/check_token", formData).then((res) => {
          if (res.data === false) {
            alert("세션이 만료되었거나 옳바르지 않은 접근입니다.");
            this.$router.push("/yonomdle-sequence9Login");
          } else {
            instance.post("/check_token", formData).then((res) => {
              if (res.data === false) {
                alert(
                  "유저와 일치하는 정보가 없습니다. \n사이트관리자에게 문의 주세요."
                );
                this.$router.push("/yonomdle-sequence9Login");
              } else {
                console.log("토큰 정보가 맞습니다.");
              }
            });
          }
        });
      } else {
        alert("로그인이 필요합니다.");
        this.$router.push("/yonomdle-sequence9Login");
      }
    } catch (err) {
      if (err.name === "jwt malformed") {
        alert("로그인이 필요합니다.");
        this.$router.push("/yonomdle-sequence9Login");
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
  background: linear-gradient(-45deg, #e7f9fc, #ffeff7, #fff7dc) !important;
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
.Explain {
  width: 100%;
  height: 40px;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
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
.sizeRebuild2 {
  position: absolute;
  bottom: 1px;
  right: 1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.inputNubmer {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #dedede;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 1rem;
}
.UserUsed {
  text-align: center;
}
.UseQR {
  vertical-align: inherit;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.qrlist {
  width: 150px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  vertical-align: inherit;
}
.YearselectBox {
  width: 105px;
  height: 30px;
  border-radius: 5px;
  margin-left: 8px;
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
    width: 25% !important;
    font-size: 13px;
  }
  .maximum {
    width: 15% !important;
    font-size: 13px;
  }
  .list {
    font-size: 13px;
  }
  .explainQR {
    font-size: 13px;
  }
  .UseInfo {
    font-size: 10px;
    width: 15.69%;
  }
  .UserUsed {
    font-size: 12px;
  }
  .Unposi {
    font-size: 12px;
  }
  .YearselectBox {
    width: 100%;
  }
  .qrlist {
    font-size: 12px !important;
  }
  .YearselectBox {
    margin-left: 0;
  }
}
</style>
