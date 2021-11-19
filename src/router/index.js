import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/without",
    name: "WithoutRenderFunction",
    // route level code-splitting
    // this generates a separate chunk (without.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "without" */ "../views/WithoutRenderFunction.vue"),
  },
  
  {
    path: "/with",
    name: "WithRenderFunction",
    // route level code-splitting
    // this generates a separate chunk (with.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "with" */ "../views/WithRenderFunction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
