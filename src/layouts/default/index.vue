<script setup lang="ts">
import { getCookie } from "@/utils/cookies";
import useMenuStore from "@/store/menu";
const router = useRouter();
const route = useRoute();
onMounted(() => {
  if (getCookie("token") === null) {
    router.push({
      path: "/login",
    });
  }
  const path = route.path.split("/")[1];

  useMenuStore().menuData.forEach((item, index) => {
    if (item.path.includes(path) && path !== "") {
      // toggleActive(item, index);
      useMenuStore().toggleActive(index);
    }
  });
});
const toggleActive = (item: any, index: number) => {
  useMenuStore().toggleActive(index);
  router.push({
    path: item.path,
  });
};
const menuData = computed(() => useMenuStore().menuData);
</script>
<template>
  <div class="default-layout-wrapper">
    <router-view />
    <div class="bottom-menu-wrapper p-3">
      <div class="bottom-menu flex justify-content-around py-3 gap-2">
        <div
          v-for="(menuItem, index) in menuData"
          :key="menuItem.id"
          @click="toggleActive(menuItem, index)"
        >
          <div
            class="p-2 flex justify-content-center align-items-center cursor-pointer"
            style="border-radius: 8px"
            :class="menuItem.active ? 'selected' : ''"
          >
            <i
              :class="
                menuItem.active ? `selected ${menuItem.icon}` : menuItem.icon
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.default-layout-wrapper {
  /* position: relative; */
  padding-right: 6.5rem;
}
.bottom-menu-wrapper {
  position: fixed;
  top: 92px;
  right: 0;
  bottom: auto;
  width: 100px;
}
.bottom-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #272727;
  height: 80vh;
  border-radius: 8px;
  padding-inline: 16px;
}
@media only screen and (min-width: 360px) and (max-width: 520px) {
  .default-layout-wrapper {
    padding-right: 0;
  }
  .bottom-menu-wrapper {
    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .bottom-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #272727;
    height: 64px;
    border-radius: 8px;
    padding-inline: 0;
  }
}
.selected {
  color: #fff;
  background-color: var(--primary);
  transition: background-color 0.3s;
  animation: blink 3s ease-in;
}

@keyframes blink {
  form {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}
</style>
