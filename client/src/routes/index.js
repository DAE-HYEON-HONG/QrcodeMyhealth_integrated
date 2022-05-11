import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import adminLogin from "@/components/adminPage/adminLogin";
import UpdateAccount from "@/components/adminPage/UpdateAccount";
// import qrScan from "@/components/qrScan";
import notQR from "@/components/notQR";
import NewQR from "@/components/NewQR";
import Me from "@/components/adminPage/Me";
import UserInfo from "@/components/UserInfo";
import InfoLaw from "@/components/infoLaw";
import InfoLawEN from "@/components/infoLawEN";
import InfoLawJP from "@/components/infoLawJP";
import emQR from "@/components/emQR";
import freeQR from "@/components/freeQR";
import QRsucces from "@/components/QRsucces";
import reset from "@/components/reset";
import freeInfo from "@/components/UserInfoFree";
import NotFound from "@/components/notFound";
// import UseLaw from "@/components/Use";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/yonomdle-sequence9Login",
      name: "adminLogin",
      component: adminLogin,
      meta: {
        title: "sequence9",
      },
    },
    // { 삭제된 페이지
    //   path: "/qrScan",
    //   name: "qrScan",
    //   component: qrScan,
    //   meta: {
    //     title: "sequence9",
    //   },
    // },
    {
      path: "/notQR",
      name: "notQR",
      component: notQR,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/notInfoQR",
      name: "notInfoQR",
      component: NewQR,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/yonomdle-sequence9",
      name: "adminPage",
      component: Me,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/qrlist/:id",
      name: "UserInfo",
      component: UserInfo,
      props: true,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/infoLaw",
      name: "InfoLaw",
      component: InfoLaw,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/infoLawEN",
      name: "InfoLawEN",
      component: InfoLawEN,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/infoLawJP",
      name: "InfoLawJP",
      component: InfoLawJP,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/emQR",
      name: "emQR",
      component: emQR,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/freeQR",
      name: "freeQR",
      component: freeQR,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/QRsucces",
      name: "QRsucces",
      component: QRsucces,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/reset",
      name: "reset",
      component: reset,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/UpdateAccountyonomdle-sequence9",
      name: "UpdateAccount",
      component: UpdateAccount,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/freeInfo",
      name: "freeInfo",
      component: freeInfo,
      meta: {
        title: "sequence9",
      },
    },
    // {
    //   path: "/UseLaw",
    //   name: "UseLaw",
    //   component: UseLaw,
    //   meta: {
    //     title: "sequence9",
    //   },
    // },
    {
      path: "/notFound",
      name: "notFound",
      component: NotFound,
      meta: {
        title: "sequence9",
      },
    },
    {
      path: "/*",
      name: "notFoundAny",
      component: NotFound,
      meta: {
        title: "sequence9",
      },
    },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
