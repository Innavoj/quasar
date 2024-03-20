const routes = [
  {
    path: "/mainlayout",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/product",
        component: () => import("pages/ProductView.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/LoginView.vue"),
  },
  {
    path: "/",
    component: () => import("pages/DashboardView.vue"),
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
