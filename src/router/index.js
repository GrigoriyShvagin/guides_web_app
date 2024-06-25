import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../Pages/MainPage.vue"),
  },
  {
    path: "/next",
    component: () => import("../Pages/NextPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
