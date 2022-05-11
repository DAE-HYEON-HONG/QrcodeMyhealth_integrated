<template>
  <div>
    <div class="w-100 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px; overflow: auto"
        >
          <div class="mt-3 p-4 font-weight-bold">
            <div>
              <span style="font-size: 22px; color: #333;">
                {{ $t("정보 저장이") }}
              </span>
              <span style="font-size: 22px; color: #333;">
                &nbsp;{{ $t("완료되었습니다") }}
              </span>
            </div>
            <hr />
          </div>
          <div class="show" style="height: 80%">
            <div class="pl-4 pr-4 h-100">
              <div class="formInside">
                <div class="mt-3" style="color: #888; font-size: 20px;">
                  <small>{{ $t("새롭게 QR Code를 스캔하면") }}</small>
                  <small
                    >&nbsp;{{ $t("저장된 정보를 확인할 수 있습니다") }}</small
                  ><br />
                  <small>{{
                    $t("비밀번호를 통해서 입력된 정보를 초기화하고")
                  }}</small
                  ><br />
                  <small>{{ $t("비밀번호는 관리자도 알 수 없습니다") }}</small
                  ><br />
                </div>
              </div>
              <div class="closingBtn" style="font-size: 16px;">
                <router-link
                  to="/"
                  class="btn btn-primary w-100"
                  style="width: 320px; height: 48px; background-color: #2E77EF; display: flex; justify-content: center; align-items: center; font-size: 19px;"
                  @click="selfClose"
                >
                  {{ $t("창 닫기") }}
                </router-link>
              </div>
            </div>
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
  methods: {
    selfClose() {
      self.opener = self;
      window.close();
    },
  },
};
</script>

<style scoped>
.closingBtn {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 55%;
  display: flex;
  align-items: center;
}
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
.Visible {
  display: none !important;
}
</style>
