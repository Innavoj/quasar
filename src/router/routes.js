const routes = [
  {
    path: "/",
    component: () => import("pages/ProductView.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/LoginView.vue"),
  },
  {
    path: "/misreservas",
    component: () => import("pages/MisReservasView.vue"),
  },
  {
    path: "/product",
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
