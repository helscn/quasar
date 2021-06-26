import MainLayout from "layouts/MainLayout";
import TopToolbar from "components/TopToolbar.vue";
import LeftSideBar from "components/LeftSideBar.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        components: {
          default: () => import("pages/Index.vue"),
          toolbar: TopToolbar,
          sidebar: LeftSideBar
        }
      }
    ]
  },
  {
    path: "/projects",
    component: MainLayout,
    children: [
      {
        path: "",
        components: {
          default: () => import("pages/ProjectsView.vue"),
          toolbar: TopToolbar,
          sidebar: LeftSideBar
        }
      }
    ]
  },
  {
    path: "/table",
    component: MainLayout,
    children: [
      {
        path: "",
        components: {
          default: () => import("pages/TableLayout.vue"),
          toolbar: TopToolbar,
          sidebar: LeftSideBar
        }
      }
    ]
  },
  {
    path: "/upload",
    component: MainLayout,
    children: [
      {
        path: "",
        components: {
          default: () => import("pages/Upload.vue"),
          toolbar: TopToolbar,
          sidebar: LeftSideBar
        }
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
