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
    path: "/",
    component: () => import("pages/LoginView.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("pages/DashboardView.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
