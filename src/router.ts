import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () => import("@layouts/default/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@pages/Home/index.vue"),
      },
      {
        path: "/logs",
        component: () => import("@pages/Logs/index.vue"),
      },
      {
        path: "/tutorials",
        component: () => import("@pages/Tutorials/index.vue"),
      },
      {
        path: "/settings",
        children: [
          {
            path: "",
            component: () => import("@pages/Settings/index.vue"),
          },
          {
            path: "account",
            component: () => import("@pages/Settings/Accounts/index.vue"),
          },
          {
            path: "stats",
            component: () => import("@pages/Settings/Stats/index.vue"),
          },
          {
            path: "privacy-and-security",
            component: () =>
              import("@pages/Settings/PrivacyAndSecurity/index.vue"),
          },
          {
            path: "notifications",
            component: () => import("@pages/Settings/Notifications/index.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@layouts/login/index.vue" as string),
    children: [
      {
        path: "",
        component: () => import("@pages/Login/index.vue"),
      },
    ],
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
