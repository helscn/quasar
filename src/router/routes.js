const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        components: {
          default: () => import("pages/Index.vue"),
          toolbar: () => import("components/TopToolbar.vue"),
          sidebar: () => import("components/LeftSideBar.vue")
        }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue")
  },
  {
    path: "/table",
    component: () => import("layouts/TableLayout.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
