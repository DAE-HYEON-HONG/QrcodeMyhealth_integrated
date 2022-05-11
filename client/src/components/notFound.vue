<template>
  <div class="mb-5">
    <div class="w-100">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px;"
        >
          <div class="p-4" style="height: 20%;">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/no_page.png"
              class="imgSizeNO_qr"
            />
          </div>
          <div
            class="mt-5 pl-4 pr-4 font-weight-bold"
            style="height: 16%; font-size: 22px; color: #333333;"
          >
            <p>{{ $t("존재하지 않는 페이지 이므로") }}</p>
            <p>{{ $t("다른 주소로 접속해주세요.") }}</p>
          </div>
          <div class="pl-4 pr-4" style="height: 30%;">
            <small style="color:#888888; font-weight: 400;">{{
              $t("등록된 페이지라면")
            }}</small
            ><br />
            <small style="color:#888888; font-weight: 400;">
              {{ $t("관리자에게 문의해주세요.") }}
            </small>
          </div>
          <div class="pr-4" style="height: 30%">
            <div class="w-100 h-75 d-flex align-items-end justify-content-end">
              <router-link to="/" class="btn btn-primary homebtn">{{
                $t("홈으로 이동")
              }}</router-link>
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
    this.$store.state.Navbar.Toggle =
      "Visible navbar navbar-expand-lg navbar-light bg-light";
  },
};
</script>

<style>
.notQR {
  width: 100%;
  display: flex;
  justify-content: center;
}
.homebtn {
  transition: ease 0.3s;
  font-size: 16px !important;
  width: 118px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.notQRBox {
  width: 400px;
  height: 725px;
}
.imgSizeNO_qr {
  width: 128px;
  height: 106px;
}
@media screen and (max-width: 992px) {
  .notQRBox {
    border: none !important;
  }
}
</style>
