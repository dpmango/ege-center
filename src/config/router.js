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
    { path: "/", redirect: "/course" },
    {
      path: "/course",
      component: () => import("@/pages/Course"),
    },
    {
      path: "*",
      component: () => import("@/pages/NotFound"),
    },
  ],
})

export default router
