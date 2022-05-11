<template>
  <div>
    <div class="w-100 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px; overflow: auto"
        >
          <div class="mt-3 p-4 font-weight-bold">
            <div class="d-flex">
              <p style="font-size: 22px; color: #333;">{{ $t("초기화") }}</p>
            </div>
            <hr />
          </div>
          <div class="show" style="height: 80%">
            <div class="pl-4 pr-4 h-100">
              <div class="formInside">
                <p style="font-weight: 700; font-size: 16px; color: #333;">
                  {{ $t("비밀번호를 입력해주세요") }}
                </p>
                <form class="mt-3">
                  <input
                    type="password"
                    class="pwInput"
                    :placeholder="$t('비밀번호 입력')"
                    autocomplete="off"
                    v-model="pw"
                  />
                  <div class="mt-3" style="color: #888; font-size: 15px;">
                    <!-- <small>{{ $t("비밀번호는 4자리 숫자입니다") }}</small
                    ><br />
                    <small>{{
                      $t("비밀번호 분실 시 초기화가 불가능합니다")
                    }}</small
                    ><br />
                    <small>{{ $t("비밀번호는 관리자도 알 수 없습니다") }}</small
                    ><br />
                    <small>{{
                      $t("초기화 선택 시 처음부터 정보를 입력해야 합니다")
                    }}</small>
                    <br /> -->
                  </div>
                  <div class="onSubmit">
                    <button
                      class="btn btn-primary w-100"
                      @click.prevent="onSubmit"
                      style="width: 320px; height: 48px; background-color: #2E77EF; font-size: 19px;"
                      type="submit"
                    >
                      {{ $t("완료") }}
                    </button>
                  </div>
                </form>
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
  data() {
    return {
      pw: "",
    };
  },
  beforeMount() {
    this.$store.state.Navbar.Toggle = "d-none";
    if (this.$store.state.Info.qrlist === "") {
      alert(this.$t("잘못된 경로입니다."));
      this.$router.push("/");
    }
  },
  methods: {
    onSubmit() {
      if (this.pw === "") {
        alert(this.$t("비밀번호가 비어있습니다."));
      } else {
        let formData = new FormData();
        formData.append("pw", this.pw);
        formData.append("qrlist", this.$store.state.Info.qrlist);
        instance.post("/resetN", formData).then((res) => {
          try {
            if (res.data === false) {
              alert(this.$t("비밀번호가 일치하지 않습니다. 다시입력해주세요."));
            } else {
              instance.post("/reset", formData).then((res2) => {
                if (res2.data === true) {
                  // this.$router.push("/");
                  alert(this.$t("초기화되었습니다."));
                  location.href = "https://www.sequence9.com";
                }
              });
            }
          } catch (err) {
            console.log(err);
          }
        });
      }
    },
  },
};
</script>

<style>
.backimg {
  width: 25px;
  height: 25px;
}
.illBtn {
  width: 100%;
  height: 40px;
  margin-top: 8px;
  border: 1px solid #a9a9a9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.onSubmit {
  height: 55%;
  display: flex;
  align-items: flex-end;
  margin-top: 12rem;
}
.formInside {
  height: 40%;
}
.pwInput {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333333;
  margin-bottom: 8px;
  padding-left: 15px;
}
</style>
