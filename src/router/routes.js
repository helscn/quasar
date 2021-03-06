import MainLayout from "layouts/MainLayout";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue")
      },
      {
        path: "projects",
        component: () => import("pages/ProjectsView.vue")
      },
      {
        path: "table",
        component: () => import("pages/TableLayout.vue")
      },
      {
        path: "upload",
        component: () => import("pages/Upload.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
