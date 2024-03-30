const routes = [
  {
    path: "/login",
    component: () => import("pages/LoginView.vue"),
  },

  {
    path: "/",
    component: () => import("pages/ProductView.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
