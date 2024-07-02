import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../Pages/MainPage.vue"),
  },
  {
    path: "/add",
    component: () => import("../Pages/AddPage.vue"),
  },
  {
    path: "/guide/:id",
    component: () => import("../Pages/GuidePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
