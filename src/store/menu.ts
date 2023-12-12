import { defineStore } from "pinia";
// import instance from "@/axiosConfig";
const useMenuStore = defineStore("menu", {
  state: () => ({
    menuData: [
      {
        id: "1",
        name: "DASHBOARD",
        path: "/",
        active: true,
        icon: "pi pi-home",
      },
      {
        id: "2",
        name: "LOGS",
        path: "/logs",
        active: false,
        icon: "pi pi-book",
      },
      {
        id: "3",
        name: "TUTORIALS",
        path: "/tutorials",
        active: false,
        icon: "pi pi-desktop",
      },
      {
        id: "4",
        name: "SETTINGS",
        path: "/settings",
        active: false,
        icon: "pi pi-cog",
      },
    ],
  }),
  actions: {
    toggleActive(activeIndex: number) {
      this.menuData.forEach((item, index) => {
        if (index === activeIndex) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
  },
});
export default useMenuStore;
