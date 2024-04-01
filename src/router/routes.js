const routes = [
  {
    path: "/",
    component: () => import("src/pages/ProductPages.vue"),
  },
  {
    path: "/login",
    component: () => import("src/pages/LoginPages.vue"),
  },
  {
    path: "/misreservas",
    component: () => import("src/pages/MisReservasPages.vue"),
  },
  {
    path: "/product",
    component: () => import("src/pages/ProductPages.vue"),
  },
  {
    path: "/encuesta",
    component: () => import("src/pages/EncuestaPages.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
