import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: "/", component: () => import("@/pages/Home") },
    {
      path: "/course",
      component: () => import("@/pages/Course"),
    },
    {
      path: "/school",
      component: () => import("@/pages/School"),
    },
    {
      path: "/teachers",
      component: () => import("@/pages/Teachers"),
    },
    // {
    //   path: "/faq",
    //   component: () => import("@/pages/Faq"),
    // },
    // {
    //   path: "/docs",
    //   component: () => import("@/pages/Docs"),
    // },
    {
      path: "/price",
      component: () => import("@/pages/Price"),
    },
    {
      path: "*",
      component: () => import("@/pages/NotFound"),
    },
  ],
})

export default router
