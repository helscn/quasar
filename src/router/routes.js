import MainLayout from 'layouts/MainLayout'
import TopToolbar from 'components/TopToolbar.vue'
import LeftSideBar from 'components/LeftSideBar.vue'

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
