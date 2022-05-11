import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    Navbar: {
      searchData: "",
      logClass: "lo notShow",
      logstatus: "lo",
      Toggle: "",
    },
    Login: {
      id: "",
      pw: "",
      idErr: "",
      pwErr: "",
      notAccount: "",
      Token: "",
    },
    Qrcode: {
      qrInfo: "",
      qrErr: "",
      qrScanStatus: "",
    },
    Info: {
      info: "",
      qrlist: "",
    },
    personInfo: {
      bloodType: "",
      age: "",
      sex: "",
      sergery: "",
      ill: "",
      medicine: "",
      alergy: "",
      sideEff: "",
      number: "",
      others: "",
      freeInfo: "",
      freeInfoText: "",
      pic: "",
      video: "",
      link: "",
    },
    adminPaging: {
      pageNum: "0",
      listArray: {
        type: Array,
        required: true,
      },
      pageSize: {
        type: Number,
        required: true,
        default: 10,
      },
    },
  },
});
