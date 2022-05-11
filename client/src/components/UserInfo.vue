<template>
  <div>
    <div class="w-100" style="border-top: 4px solid #2e77ef;">
      <div class="realQR mt-3">
        <div class="realQRBox" style=" overflow-x: auto;">
          <div class="d-flex" style="width: 100%; justify-content: center;">
            <span
              style="font-weight: 700; color: #333333; font-size: 22px; text-align: center;"
            >
              {{ $t("응급의료정보") }}
            </span>
          </div>
          <hr />
          <table>
            <tr>
              <th scope="row" class="">{{ $t("혈액형") }}</th>
              <td>
                {{ $t(bloodType) }}
              </td>
              <hr />
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("나이(만)") }}</th>
              <td>
                {{ age }}
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("성별") }}</th>
              <td>
                {{ $t(sex) }}
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("수술기록") }}</th>
              <td>
                <div>
                  <div v-for="sergeryItems in sergery" :key="sergeryItems">
                    {{ $t(sergeryItems) }}
                  </div>
                  <div
                    v-for="sergeryUserItems in sergeryUser"
                    :key="sergeryUserItems.input"
                  >
                    <div class="d-flex">
                      <span>{{ sergeryUserItems.input }}</span>
                      <div v-if="sergeryUserChk != 0">
                        <span> ({{ $t(sergeryUserItems.option) }}) </span>
                      </div>
                      <div v-else>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("현재병력") }}</th>
              <td>
                <div>
                  <div v-for="illItems in ill" :key="illItems">
                    {{ $t(illItems) }}
                  </div>
                  <div
                    v-for="illUserItems in illUser"
                    :key="illUserItems.input"
                  >
                    {{ illUserItems.input }}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("복용약물") }}</th>
              <td>
                <div>
                  <div v-for="medicineItems in medicine" :key="medicineItems">
                    {{ $t(medicineItems) }}
                  </div>
                  <div
                    v-for="medicineUserItems in medicineUser"
                    :key="medicineUserItems.input"
                  >
                    {{ medicineUserItems.input }}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("알레르기") }}</th>
              <td>
                {{ $t(alergy) }}
                <div
                  v-for="alergyUserItems in alergyUser"
                  :key="alergyUserItems.input"
                >
                  {{ alergyUserItems.input }}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("조영제 부작용") }}</th>
              <td>
                {{ $t(sideEff) }}
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("비상 연락처") }}</th>
              <td>
                {{ $t(number) }}
                <div v-for="numberItems in numberUser" :key="numberItems.input">
                  {{ numberItems.input }}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="">{{ $t("기타정보") }}</th>
              <td style="width: 250px;">
                {{ $t(others) }}
              </td>
            </tr>
          </table>

          <div class="w-100 centerBlock mt-3" style="height: 27%">
            <hr />
            <p style="color: #888888; font-weight: 400; font-size: 18px;">
              {{ $t("위 정보는 사용자에 의해 입력되었습니다.") }}<br /><br />{{
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
import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sequence9.com/server",
  // baseURL: "http://localhost:9000",
});
export default {
  beforeMount() {
    this.$store.state.Navbar.Toggle = "d-none";
  },
  data() {
    return {
      bloodType: "",
      age: "",
      sex: "",
      sergery: "",
      sergeryUserChk: 0,
      ill: "",
      medicine: "",
      alergy: "",
      sideEff: "",
      number: "",
      others: "",
      sergeryUser: [],
      illUser: "",
      numberUser: "",
      medicineUser: "",
      alergyUser: "",
    };
  },
  created() {
    let today = new Date();
    let currentUrl = window.location.href;
    let splitUrl = currentUrl.split(":");
    let formData = new FormData();
    formData.append("qrInfo", splitUrl[2]); //
    instance.post(`/check_Info`, formData).then((res) => {
      if (res.data === false) {
        this.$router.push("/notQR");
      } else if (res.data === true) {
        this.$store.state.Info.qrlist = splitUrl[2]; //
        this.$router.push("/notInfoQR");
      } else if (res.data.free === "yes") {
        this.$store.state.personInfo.freeInfoText = res.data.freeText;
        this.$store.state.personInfo.pic += res.data.pic1 + ",";
        this.$store.state.personInfo.pic += res.data.pic2 + ",";
        this.$store.state.personInfo.pic += res.data.pic3;
        this.$store.state.personInfo.video = res.data.video;
        this.$store.state.personInfo.link = res.data.link;
        this.$store.state.Info.qrlist = splitUrl[2]; //
        this.$router.push("/freeInfo");
      } else if (res.data.free === "none") {
        this.bloodType = res.data.bloodType;
        let AgeNot = res.data.age.split("-");
        let birthDate = new Date(AgeNot[0], AgeNot[1], AgeNot[2]);
        this.age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          this.age--;
        }
        this.sex = res.data.sex;
        this.sergery = res.data.sergery.split(",");
        this.$store.state.Info.qrlist = splitUrl[2];
        this.sergery = this.sergery.filter((item) => {
          return item !== null && item !== undefined && item !== "";
        });
        this.sergery.splice(3);
        this.ill = res.data.ill.split(",");
        this.medicine = res.data.medicine.split(",");
        this.alergy = res.data.alergy;
        this.sideEff = res.data.sideEff;
        this.number = res.data.number;
        this.others = res.data.others;
        this.numberUser = JSON.parse(res.data.numberUser);
        this.sergeryUser = JSON.parse(res.data.sergeryUser);
        if (this.sergery.length === 3) {
          this.sergeryUser.splice(0);
          this.sergeryUserChk = 0;
        } else if (this.sergery.length === 2) {
          this.sergeryUser.splice(1);
          this.sergeryUserChk = 1;
        } else if (this.sergery.length === 1) {
          this.sergeryUser.splice(2);
          this.sergeryUserChk = 1;
        }
        if (this.sergeryUser[0].input == "") {
          this.sergeryUserChk = 0;
        }
        this.illUser = JSON.parse(res.data.illUser);
        this.medicineUser = JSON.parse(res.data.medicineUser);
        this.alergyUser = JSON.parse(res.data.alergyUser);
      }
    });
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
  width: 33%;
  vertical-align: top;
  padding-top: 10px;
  padding-left: 1rem;
  color: #888888;
  font-weight: 400;
  font-size: 19px;
}
.realQRBox td {
  width: 70%;
  word-break: break-all;
  font-size: 19px;
}
.homebtn {
  transition: ease 0.3s;
}
.realQRBox {
  width: 400px;
  height: 700px;
}
.realQRBox {
  -ms-overflow-style: none;
}
.realQRBox::-webkit-scrollbar {
  display: none;
}
.userInfo {
  display: flex;
}

.infoTitle {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  width: 120px;
  background-color: #a7a7a7;
  padding-left: 1rem;
}
.centerBlock {
  padding: 1rem 3rem 4rem 3rem;
}
hr {
  flex-grow: 1;
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
.ChangeInfo {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e77ef;
  color: white !important;
  font-size: 18px;
  border-radius: 5px;
  padding: 20px;
}
.ChangeInfo:hover {
  text-decoration: none !important;
}
</style>
