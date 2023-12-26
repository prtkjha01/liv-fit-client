<script setup lang="ts">
import useUserStore from "@store/user";
import useHomepageStore from "@/store/homepage";
import LineChart from "@components/home/charts/LineChart.vue";
import BarChart from "@/components/home/charts/BarChart.vue";
import StepsWidget from "@/components/home/widgets/StepsWidget.vue";
import WaterWidget from "@/components/home/widgets/WaterWidget.vue";
import SleepWidget from "@/components/home/widgets/SleepWidget.vue";
// import DoughnutChart from "@components/home/charts/DoughnutChart.vue";
import { getCookie, deleteCookie } from "@/utils/cookies";
import router from "@/router";
const handleLogout = () => {
  deleteCookie("token");
  deleteCookie("user");
  router.push({ path: "/login" });
  window.location.reload();
};
const showSidebar = ref(false);
const op = ref();
onMounted(() => {
  if (getCookie("token") === null) {
    router.push("/login");
  }
  getBlogs();
  useHomepageStore().getSleepData();
  useHomepageStore().getSteps();
  useHomepageStore().getWaterRecord();
});
const user = computed(() => useUserStore().user);
const blogs = computed(() => useHomepageStore().blogs as any[]);
const sleepData = computed(() => {
  const temp: any[] = [];
  useHomepageStore().sleepData.forEach((sleep: any) => {
    temp.push(sleep.duration);
  });
  return temp;
});
const toggleNotifMenu = () => {
  op.value.toggle(event);
};
const blogLoading = ref(false);
const getBlogs = () => {
  blogLoading.value = true;
  useHomepageStore()
    .getBlogs()
    .then(() => {
      blogLoading.value = false;
    })
    .catch(() => {
      blogLoading.value = false;
    });
};
</script>
<template>
  <div class="">
    <header class="header flex align-items-center justify-content-between mt-3">
      <div class="left flex align-items-center gap-3">
        <div class="avatar flex align-items-center justify-content-center">
          <i
            class="pi pi-user"
            style="font-size: 1.2rem; color: #fff"
            @click="showSidebar = true"
          />
        </div>

        <div class="user">Hi, {{ user && user.name }}</div>
      </div>

      <div class="right flex align-items-center justify-content-center">
        <i
          class="pi pi-bell"
          style="font-size: 1.5rem"
          @click="toggleNotifMenu"
        />
        <OverlayPanel ref="op" class="notif-menu"> </OverlayPanel>
      </div>
    </header>

    <!-- MOBILE WIDGET VIEW START-->
    <section class="mobile-body">
      <div class="card mt-5">
        <LineChart v-if="sleepData.length" :data="sleepData.slice(0, 7)" />
        <div v-else class="flex align-items-center justify-content-center">
          <i
            class="pi pi-spin pi-spinner"
            style="color: var(--primary); font-size: 2rem"
          />
        </div>
      </div>
      <div class="flex justify-content-between abc gap-3">
        <StepsWidget />
        <WaterWidget />
      </div>
      <div class="card mt-5">
        <BarChart />
      </div>
    </section>
    <!-- MOBILE WIDGET VIEW END-->

    <!-- DESKTOP WIDGET VIEW START-->
    <section class="desktop-body">
      <div class="flex justify-content-between gap-4 mt-5">
        <div class="card w-full">
          <LineChart v-if="sleepData.length" :data="sleepData.slice(0, 7)" />
          <div
            v-else
            class="h-full flex align-items-center justify-content-center"
          >
            <i
              class="pi pi-spin pi-spinner"
              style="color: var(--primary); font-size: 2rem"
            />
          </div>
        </div>
        <div class="w-full">
          <div class="card w-full">
            <BarChart />
          </div>
          <div class="card w-full mt-4">
            <BarChart />
          </div>
        </div>
      </div>
      <div class="flex justify-content-between gap-4">
        <StepsWidget />
        <SleepWidget />
        <WaterWidget />
      </div>
    </section>
    <!-- DESKTOP WIDGET VIEW END-->

    <!-- BLOGS SECTION START -->
    <section>
      <div class="blog-heading mt-3">Blogs</div>

      <div class="blogs-container gap-4 mt-4">
        <div
          v-if="!blogLoading"
          v-for="blog in blogs"
          class="blog card"
          :key="blog._id"
        >
          <div class="blog-image-container">
            <img :src="blog.images[0]" class="blog-image" alt="blog-image" />
          </div>
          <div class="blog-body-container p-2">
            <div class="blog-title">{{ blog.title }}</div>
            <div class="blog-content mt-1">
              {{ blog.content.slice(0, 87) }}...
            </div>
            <div class="blog-author mt-2">- {{ blog.author }}</div>
            <div class="blog-date">{{ new Date().toLocaleDateString() }}</div>
          </div>
        </div>
        <div
          v-else
          v-for="i in 4"
          class="blog card"
          :key="i"
          style="position: relative"
        >
          <div class="blog-image-container">
            <Skeleton
              width="full"
              height="8rem"
              class="blog-image"
              style="background-color: rgba(58, 58, 58, 0.644)"
            />
          </div>
          <div class="blog-body-container p-2">
            <Skeleton
              width="4rem"
              height="1rem"
              style="background-color: rgba(58, 58, 58, 0.644)"
            />
            <Skeleton
              width="full"
              height=".7rem"
              class="mt-2"
              style="background-color: rgba(58, 58, 58, 0.644)"
            />
            <Skeleton
              width="7rem"
              height=".7rem"
              class="mt-1"
              style="background-color: rgba(58, 58, 58, 0.644)"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- BLOGS SECTION END -->
  </div>
  <Sidebar v-model:visible="showSidebar" class="user-menu" header="Sidebar">
    <div @click="handleLogout">Logout</div>
  </Sidebar>
</template>
<style scoped>
.card {
  background-color: #222;
  box-shadow: 0px 1px 40px -100px rgba(255, 255, 255, 0.27);
  -webkit-box-shadow: 0px 1px 40px -100px rgba(255, 255, 255, 0.27);
  -moz-box-shadow: 0px 1px 40px -100px rgba(255, 255, 255, 0.27);
  padding: 20px;
}
/* .abc {
  flex-direction: column;
} */
.avatar {
  background-color: var(--primary);
  height: 40px;
  width: 40px;
  border-radius: 100%;
}
.user {
  font-size: 18px;
  font-weight: 700;
}
/* .water-widget {
  
  background: url("https://img.freepik.com/free-photo/fresh-water-texture-background-transparent-liquid_53876-142909.jpg?size=626&ext=jpg&ga=GA1.1.1152342917.1698132157&semt=ais");
  background-size: cover;
} */
.glass {
  height: 120px;
  width: 50px;
  background-color: rgba(115, 115, 115, 0.69);

  position: relative;
}
.circle {
  height: 85px;
  width: 85px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  background-image: url("../../assets/wave.png");
  background-size: 70px 150px;
  background-repeat: repeat-x;
  animation: flow 2s ease-out;
  background-position: 0px 0px;
}
@keyframes flow {
  0% {
    background-position: -50px 10px;
  }
  100% {
    background-position: 0px -47px;
  }
}
.water-wrapper {
  position: absolute;
  /* padding: 10px; */
  /* margin: 10px; */
  background-color: rgb(54, 163, 235);
  /* height: 100px; */
  width: 30px;
  bottom: 10px;
  left: 10px;
}
/* .water {
  height: 20px;
  background-color: blue;
} */
.blogs-container {
  width: 100%;
  overflow-x: scroll;
  display: flex;
}
.blog-heading {
  font-size: 18px;
  font-weight: 700;
}
.blog {
  color: var(--primary);
  /* min-width: 192px; */
}
.blog.card {
  padding: 0;
}
.blog-image {
  height: 228px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.blog-title {
  font-weight: 700;
}
.blog-content {
  font-size: 12px;
}
.blog-author {
  font-size: 13px;
  text-align: end;
}
.blog-date {
  color: #5d5d5d;
  font-size: 12px;
  text-align: end;
}
.blogs-container::-webkit-scrollbar {
  display: none;
}
.blogs-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
<style scoped>
.mobile-body {
  display: none;
}
@media only screen and (min-width: 360px) and (max-width: 520px) {
  .desktop-body {
    display: none;
  }
  .mobile-body {
    display: block;
  }
  .blog {
    min-width: 152px;
  }
  .blog-image {
    height: 128px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
}
</style>
<style>
.user-menu.p-sidebar {
  background-color: #222;
  color: var(--primary);
}
.user-menu.p-sidebar .p-icon.p-sidebar-close-icon {
  color: var(--primary);
}
.p-overlaypanel:after,
.p-overlaypanel:before {
  bottom: 100%;
  left: calc(var(--overlayArrowLeft, 0) + 0.6rem);
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible,
.p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {
  box-shadow: none;
}
.water-knob .p-knob-text {
  fill: #fff;
}
.steps-knob .p-knob-text {
  fill: #fff;
  /* fill: #dd9e2b; */
}
</style>
