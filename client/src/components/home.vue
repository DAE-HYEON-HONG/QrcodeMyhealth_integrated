<template>
  <div @scroll="changePicture">
  <div>
    <div class="w-100 bannerColor" style="height: 300px;">
      <div class="m-auto banner h-100 string-middle">
        <div class="d-flex">
          <p style="font-weight:600; color: #fff;">QRCODE</p>
          <p style="color:#2e77ef; font-weight:600">'s Emergency QR</p>
        </div>
        <p style="font-weight:600; font-size: 25px; color: #fff">
          {{ $t("QR코드로") }}<br />
          {{ $t("빠르고 새롭게 정보를 얻어보세요!") }}
        </p>
        <small style="color:#9d9d9d;">{{
          $t("DB도 암호화 되어 있습니다.")
        }}</small>
      </div>
    </div>
    <div class="CenterBanner">
      <!-- 배너 삭제됨. 2021-03-29 월요일 -->
      <div class="StickyBanner">
        <div class="Banner2">
          <div class="HomeImgSize">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (1).png"
              alt=""
              :class="desktopImg1"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (2).png"
              alt=""
              :class="desktopImg2"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (3).png"
              alt=""
              :class="desktopImg3"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (4).png"
              alt=""
              :class="desktopImg4"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (5).png"
              alt=""
              :class="desktopImg5"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (6).png"
              alt=""
              :class="desktopImg6"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (7).png"
              alt=""
              :class="desktopImg7"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (8).png"
              alt=""
              :class="desktopImg8"
            />
          </div>
          <div class="Title">
            <div class="section1">
              <h4 class="FontBold sec1Title">
                Sequence9 absorbs
                <br />
                your worries
              </h4>
              <small style="color: #a5a5a5;">
                the ultimate panties for incontinence that can save your life.
              </small>
              <p class="miniTitle">
                “the perfect underwear for mothers”
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                What is
                <br />
                Sequence9?
              </h4>
              <small style="color: #a5a5a5;">
                Emergency medical information helps increase your chances of<br />
                survival when you are in trouble like unconscious. The
                medical<br />
                staff scans the code and use your medical information for an<br />
                emergency.
              </small>
              <p class="miniTitle">
                Multi-layers of fabric for leak proof help to avoid<br />
                embarrassing situations of bladder control difficulties.
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                When do you
                <br />
                need it?
              </h4>
              <small style="color: #a5a5a5;">
                In situations where bladder control is difficult,<br />Sequence9’s
                multi-layers help to avoid embarrassing situations.
              </small>
              <p class="miniTitle">
                Sequence9 helps increase your chances of survival<br />
                when you are unconscious or in an emergency situation<br />
                where you have a health problem.
                <br />
                <br />
                Sequence9’s emergency code shows the medical information<br />
                you have stored to the medical team for accurate treatment.
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                “for mother”
                <br />
                Why we made?
              </h4>
              <p class="miniTitle">
                My mother has suffered from urinary incontinence<br />
                since pregnancy and I didn’t know the embarrassment <br />
                she had endured because of it, until recently.
                <br />
                As I was thinking about other ways to help my mother,<br />
                I realized I can’t always physically be there for her. <br />
                In a moment of an emergency,<br />
                I wanted to create an easy way to provide important <br />
                medical information to medical professionals, <br />
                hence the emergency QR code. <br />
                Time is of the essence in emergencies; therefore,<br />
                it will give me the peace of mind that with Sequence9, <br />
                my mother’s medical information is easily <br />
                accessible to the medical staff.
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                How does it work?
              </h4>
              <small style="color: #a5a5a5;">
                Your emergency medical information<br>
                on the underwear may save your life.
              </small>
              <p class="miniTitle">
                <ul>
                  <li>
                    The medical information is <br>
                    easily accessible to the medical staff.
                  </li>
                  <li>
                    Saving your time in emergencies
                    <br>gives more chance to save your life.
                  </li>
                  <li>
                    Just scan the QR code on the underwear <br>
                    and see the personal medical information for emergencies.
                  </li>
                </ul>
              </p>
              <small style="color: #a5a5a5;">
                Multiple layers of fabric prevent <br>
                moisture from leaking.
              </small>
              <p class="miniTitle">
                <ul>
                  <li>
                    Feel safe and confident with leak proof underwear.
                  </li>
                  <li>
                    5 layers fabric removes your worries <br>
                    about urinary incontinence or menstrual concerns.
                  </li>
                  <li>
                    Diapers undermine the dignity of an adult.
                  </li>
                </ul>
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                How to use?
              </h4>
              <small style="color: #a5a5a5;">
                How to save medical information for emergencies:
              </small>
              <p class="miniTitle">
                <ul>
                  <li>
                    Scan the emergency code (QR code on underwear)
                  </li>
                  <li>
                    Input your medical information for emergencies.
                  </li>
                  <li>
                    Save with password.
                  </li>
                </ul>
              </p>
            </div>
            <div class="section2">
              <small style="color: #a5a5a5;">
                How to see medical information for emergencies:
              </small>
              <p class="miniTitle">
                <ul>
                  <li>
                    Scan the emergency code (QR code on underwear)
                  </li>
                  <li>
                    Use medical information in emergencies.
                  </li>
                </ul>
              </p>
              <small style="color: #a5a5a5;">
                Easy and fast
              </small>
              <p class="miniTitle">
                <ul>
                  <li>
                    No apps required.
                  </li>
                  <li>
                    No sign up required.
                  </li>
                  <li>
                    No battery required.
                  </li>
                </ul>
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                “Protect her dignity”
              </h4>
              <small style="color: #a5a5a5;">
                What is the goal?
              </small>
              <p class="miniTitle">
                <ul>
                  <li>
                    Protection from embarrassing moments.
                  </li>
                  <li>
                    Efficiently relay important medical information<br>
                    to protect again medical errors.
                  </li>
                  <li>
                    In an emergency situation,<br>
                    Sequence9 saves time, mishaps, and your life.
                  </li>
                </ul>
              </p>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                “with mom”
              </h4>
              <small style="color: #a5a5a5;">
                Share your wonderful experience
              </small>
              <p class="miniTitle">
                Distance may keep us apart but one way that <br>
                my mother can feel cared for and protected<br>
                is by gifting her Sequence9.
                She can wear Sequence9 with dignity, confidence,<br>
                and reassurance that in case of an emergency,<br>
                we both will have ease of mind knowing that <br>
                she will be getting the necessary medical attention.
                Spread this wonderful news of Sequence9 with family<br>
                and friends, you never know it could save someone’s life.<br>
                She will be in great care with Sequence9!

              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 모바일 배너 삭제됨. 2021-03-29 월요일 -->
      <div class="MobileBanner">
        <div class="banner3">
          <div class="MSec1">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (1).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              Sequence9 absorbs your worries
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              the ultimate panties for incontinence that can save your life.
              “the perfect underwear for mothers”

            </h4>
          </div>
          <div class="MSec1">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (2).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              What is Sequence9?
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              Emergency medical information helps increase your chances of survival when you are in trouble like unconscious.
              The medical staff scans the code and use your medical information for an emergency.
            </h4>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              Multi-layers of fabric for leak proof help to avoid embarrassing situations of bladder control difficulties.
            </h4>
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              When do you need it?
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              In situations where bladder control is difficult, Sequence9’s multi-layers help to avoid embarrassing situations.
            </h4>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              Sequence9 helps increase your chances of survival when you are unconscious or in an emergency situation where you have a health problem.
            </h4>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              Sequence9’s emergency code shows the medical information you have stored to the medical team for accurate treatment
            </h4>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (3).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              “for mother”
              <br />
              Why we made?
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              My mother has suffered from urinary incontinence since pregnancy and I didn’t know the embarrassment she had endured because of it, until recently.<br>
              As I was thinking about other ways to help my mother,<br>
              I realized I can’t always physically be there for her.<br>
              In a moment of an emergency, I wanted to create an easy way to provide <br>
              important medical information to medical professionals, hence the emergency QR code.<br>
              Time is of the essence in emergencies; therefore, it will give me the peace of mind that with Sequence9,<br>
              my mother’s medical information is easily accessible to the medical staff.
            </h4>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (4).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              How does it work?
            </h3>
            <small style="color: #a5a5a5; font-size: 15px;">
                Your emergency medical information on the underwear may save your life.
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              <ul>
                  <li>
                    The medical information is <br>
                    easily accessible to the medical staff.
                  </li>
                  <li>
                    Saving your time in emergencies
                    <br>gives more chance to save your life.
                  </li>
                  <li>
                    Just scan the QR code on the underwear <br>
                    and see the personal medical information for emergencies.
                  </li>
                </ul>
            </h4>
            <small style="color: #a5a5a5; font-size: 15px;">
                Multiple layers of fabric prevent moisture from leaking.
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              <ul>
                  <li>
                    Feel safe and confident with leak proof underwear.
                  </li>
                  <li>
                    5 layers fabric removes your worries about urinary incontinence or menstrual concerns.
                  </li>
                  <li>
                    Diapers undermine the dignity of an adult.
                  </li>
                </ul>
            </h4>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (5).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              How to use?
            </h3>
            <small style="color: #a5a5a5; font-size: 15px;">
                How to save medical information for emergencies:
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              <ul>
                  <li>
                    Scan the emergency code (QR code on underwear)
                  </li>
                  <li>
                    Input your medical information for emergencies.
                  </li>
                  <li>
                    Save with password.
                  </li>
                </ul>
            </h4>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (6).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              How to use?
            </h3>
            <small style="color: #a5a5a5; font-size: 15px;">
                How to see medical information for emergencies:
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              <ul>
                  <li>
                    Scan the emergency code (QR code on underwear)
                  </li>
                  <li>
                    Use medical information in emergencies.
                  </li>
                </ul>
            </h4>
            <small style="color: #a5a5a5; font-size: 15px;">
                Easy and fast
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              <ul>
                  <li>
                    No apps required.
                  </li>
                  <li>
                    No sign up required.
                  </li>
                  <li>
                    No battery required.
                  </li>
                </ul>
            </h4>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (7).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              “Protect her dignity”
            </h3>
            <small style="color: #a5a5a5; font-size: 15px;">
                What is the goal?
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              <ul>
                  <li>
                    Protection from embarrassing moments.
                  </li>
                  <li>
                    Efficiently relay important medical information to protect again medical errors.
                  </li>
                  <li>
                    In an emergency situation, Sequence9 saves time, mishaps, and your life.
                  </li>
                </ul>
            </h4>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/sq9 web (8).png"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              “with mom”
            </h3>
            <small style="color: #a5a5a5; font-size: 15px;">
                Share your wonderful experience
            </small>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              Distance may keep us apart but one way that my mother can feel cared for and protected is by gifting her Sequence9.<br>
              She can wear Sequence9 with dignity, confidence,<br>
              and reassurance that in case of an emergency, <br>
              we both will have ease of mind knowing that<br>
              she will be getting the necessary medical attention.
              Spread this wonderful news of Sequence9 with family and friends,<br>
              you never know it could save someone’s life.<br>
              She will be in great care with Sequence9!

            </h4>
          </div>
        </div>
      </div>
      <!--<div class="centerImg">
        <img
          src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/qrcodeMainLogo.png"
          alt="배너 이미지"
          class="bigBanner"
        />
        <button class="viewMore" @click="GoOtherSite">
          <span>VIEW MORE</span>
        </button>
      </div> -->
      <div>
        <span class="nothingSpan no-drag">
          SEQUENCE9 “PROTECT HER DIGNITY” Multi-Layered, Leak Proof Women
          Underwear with a QR Code to Store Your Health-Related Information for
          Emergencies SEQUENCE9 absorbent underwear is designed to use on an
          everyday basis. It is made with bamboo, cotton, and polyester, which
          is soft yet breathable. The multi-layered fabric traps liquid and
          odor. It has a printed QR code where you can link your health-related
          information that could be used in emergencies. It is not only limited
          to the elderly but also ladies who have bladder control problems,
          urinary incontinence, and women on menstrual cycles. The last thing
          you want to happen during that time of the month is getting menstrual
          blood on your bed. Urinary incontinence is common in women after their
          pregnancy, childbirth, and menopause. Our Goal - Protect Her Dignity
          At SEQUENCE9, we want to share our love and support to all the mothers
          who put their lives on hold and take care of their kids. By wearing
          our protective underwear, your mother can get her dignity, confidence,
          and reassurance back to life. We want to relieve the burden on your
          shoulders because we understand that you worry about your mother.
          We've designed a soft yet efficient underwear that could be useful in
          many ways.
        </span>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$t(this.$router.name);
    },
  },
  data() {
    return {
      scrollPosition: null,
      desktopImg1: "ImgSize visi-v",
      desktopImg2: "ImgSize visi-h",
      desktopImg3: "ImgSize visi-h",
      desktopImg4: "ImgSize visi-h",
      desktopImg5: "ImgSize visi-h",
      desktopImg6: "ImgSize visi-h",
      desktopImg7: "ImgSize visi-h",
      desktopImg8: "ImgSize visi-h",
    };
  },
  created() {},
  beforeMount() {
    this.$store.state.Navbar.Toggle =
      "Visible navbar navbar-expand-lg navbar-light bg-light";
    this.$store.state.personInfo.bloodType = "";
    this.$store.state.personInfo.age = "";
    this.$store.state.personInfo.sex = "";
    this.$store.state.personInfo.sergery = "";
    this.$store.state.personInfo.ill = "";
    this.$store.state.personInfo.medicine = "";
    this.$store.state.personInfo.alergy = "";
    this.$store.state.personInfo.sideEff = "";
    this.$store.state.personInfo.number = "";
    this.$store.state.personInfo.others = "";
    this.$store.state.personInfo.freeInfo = "";
    // window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    GoOtherSite() {
      window.location.href = "http://www.sequence9.net";
    },
    GoHome() {
      this.$router.go(this.$router.currentRoute);
    },
    AdminLogin() {
      this.$router.push("/yonomdle-sequence9Login");
    },
    qrScan() {
      this.$router.push("/qrScan");
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.changePicture();
    },
    changePicture() {
      if (this.scrollPosition < 1193) {
        this.desktopImg1 = "ImgSize visi-v";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      } else if (this.scrollPosition > 1193) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-v";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 2263) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-v";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 3392) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-v";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 4540) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-v";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 5683) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-v";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 6816) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-v";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 7448) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-v";
        this.desktopImg8 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 8464) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
        this.desktopImg4 = "ImgSize visi-h";
        this.desktopImg5 = "ImgSize visi-h";
        this.desktopImg6 = "ImgSize visi-h";
        this.desktopImg7 = "ImgSize visi-h";
        this.desktopImg8 = "ImgSize visi-v";
      }
    },
    TODeskImg2() {
      window.scrollTo({ top: "1883", behavior: "smooth" });
    },
    TODeskImg3() {
      window.scrollTo({ top: "3021", behavior: "smooth" });
    },
    TODeskImg0() {
      window.scrollTo({ top: "0", behavior: "smooth" });
    },
  },
  destory() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.bannerColor {
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-image: url("./img/banner.png") !important;
  background-size: 100% !important;
  background-position: center !important;
  transition: all cubic-bezier(0.34, 0.06, 0.01, 1) 2s !important;
}

.bannerColor:hover {
  background-image: url("./img/banner.png") !important;
  background-size: 130% auto !important;
}

.banner {
  width: 70% !important;
}

.choice {
  width: 70% !important;
}

.choice-list {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}

.string-middle {
  padding-top: 5rem !important;
}

.FontBold {
  font-weight: 700;
}

.HomeImgSize {
  width: 800px;
  height: 500px;
  overflow: hidden;
  position: sticky;
  position: -webkit-sticky;
  top: 250px;
  margin-top: 150px;
  box-shadow: 0 0 54px 0 rgba(0, 0, 0, 0.2);
  border-radius: 30px;
}
.ImgSize {
  width: 800px;
  height: 510px;
  z-index: 1;
  position: absolute;
}
.ImgSize:nth-of-type(2) {
  z-index: 2;
}
.ImgSize:nth-of-type(3) {
  z-index: 3;
}
.Banner2 {
  display: flex;
}
.Title {
  margin-top: 40rem;
  margin-left: 2rem;
  height: 9200px;
  position: relative;
  left: 4rem;
}
.section2 {
  margin-top: 50rem;
}
.StickyBanner {
  width: 90%;
}
/* .CenterBanner { 이전 버전에서 센터 배너 제작할때 썻었던 스타일입니다.
  display: flex;
  width: 100%;
  justify-content: center;
} */
.CenterBanner {
  width: 100%;
  height: 100%;
}
.centerImg {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bigBanner {
  width: 50%;
}
.viewMore {
  width: 130px;
  height: 40px;
  background: white;
  border: 1px solid #444444;
}
.miniTitle {
  margin-top: 1rem;
  font-size: 15px;
  color: #121212;
}
.Sec1 {
  margin-top: 5rem;
}
.MSec1 {
  margin-top: 4rem;
}
.OnlyHomeBtn {
  padding: 20px;
  display: flex;
  align-items: center;
  border: none;
  height: 40px;
  background-color: #000b30;
  border-radius: 10px;
  color: white;
}
.OnlyHomeBtn:hover {
  background-color: #1f3a94;
}
.MobileBanner {
  width: 75%;
  display: none;
}
.ImgSize2 {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
.homeColor {
  background: linear-gradient(-45deg, #6b5f50, #5b6c87, #a67358);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.arrowIcon {
  width: 20px;
  height: 20px;
}
.ButtonDown {
  justify-content: flex-end;
  cursor: pointer;
}
.arrowIconReverse {
  width: 20px;
  height: 20px;
  transform: rotate(-180deg);
}
.nothingSpan {
  color: #fff;
  font-size: 10px;
}
.no-drag {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
@media screen and (max-width: 992px) {
  .HomeImgSize {
    width: 300px;
    height: 200px;
  }
  .ImgSize {
    width: 300px;
    height: 200px;
    z-index: 1;
  }
  .sec1Title {
    font-size: 18px;
  }
  .MobileBanner {
    display: block;
  }
  .StickyBanner {
    display: none;
  }
  ul {
    list-style: none;
  }
}
</style>
