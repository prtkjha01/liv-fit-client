<script setup lang="ts">
import useUserStore from "@store/user";
import useHomepageStore from "@/store/homepage";
import LineChart from "@components/home/charts/LineChart.vue";
import BarChart from "@/components/home/charts/BarChart.vue";
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
const toggleNotifMenu = () => {
  op.value.toggle(event);
};
onMounted(() => {
  if (getCookie("token") === null) {
    router.push("/login");
  }
  useHomepageStore().getBlogs();
  useHomepageStore().getSleepData();
  useHomepageStore().getSteps();
});
const user = computed(() => useUserStore().user);
const blogs = computed(() => useHomepageStore().blogs as any[]);
const steps = computed(() => useHomepageStore().steps as number);
const sleepData = computed(() => {
  const temp: any[] = [];
  useHomepageStore().sleepData.forEach((sleep: any) => {
    temp.push(sleep.duration);
  });
  return temp;
});
// const height = ref<number>(33.33);
const value = ref(7);
</script>
<template>
  <div class="">
    <div class="header flex align-items-center justify-content-between mt-3">
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
    </div>
    <div class="mobile-body">
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
        <div
          class="doughnut-chart steps-card card flex flex-column justify-content-center align-items-center mt-5"
        >
          <div class="flex justify-content-center align-items-center">
            <div class="svg-container">
              <svg
                fill="#ca922b"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="60px"
                height="60px"
                viewBox="0 0 515.458 515.458"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M298.794,386.711c27.805,9.522,52.357,15.587,87.633,26.427C372.875,584.374,210.952,516.371,298.794,386.711z
		 M443.366,229.409c-1.826-51.415-10.882-118.86-83.017-108.292c-33.815,8.825-58.8,45.962-70.551,110.035
		c-6.454,35.229-2.701,84.678,4.912,114.32c6.951,20.889,4.587,19.605,12.058,23.572c28.916,6.514,57.542,13.725,86.693,21.078
		C423.075,369.209,447.397,258.182,443.366,229.409z M220.752,225.463c7.607-29.646,11.36-79.095,4.909-114.32
		C213.919,47.067,188.931,9.924,155.11,1.105C82.975-9.463,73.919,57.981,72.093,109.399
		c-4.031,28.768,20.294,139.802,49.911,160.711c29.149-7.353,57.771-14.558,86.696-21.078
		C216.162,245.069,213.798,246.352,220.752,225.463z M129.029,293.132c13.547,171.234,175.47,103.231,87.63-26.427
		C188.854,276.228,164.304,282.292,129.029,293.132z"
                  />
                </g>
              </svg>
            </div>
            <Knob
              v-model="steps"
              class="steps-knob"
              valueColor="#dd9e2b"
              :max="steps > 10000 ? steps : 10000"
              :strokeWidth="6"
            />
          </div>
          <div class="text-white text-sm font-bold">Steps</div>
        </div>
        <div
          class="doughnut-chart flex flex-column justify-content-center align-items-center water-card card mt-5"
        >
          <div class="flex justify-content-center align-items-center">
            <div class="svg-container">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#B4DFFB"
                    d="M26.6995662,63 C36.4747667,63 44.3991324,55.0756343 44.3991324,45.3004338 C44.3991324,35.5252333 26.6995662,9 26.6995662,9 C26.6995662,9 9,35.5252333 9,45.3004338 C9,55.0756343 16.9243657,63 26.6995662,63 Z"
                  />
                  <path
                    fill="#4796E7"
                    d="M41.1107898,41 C48.351679,41 54.2215796,35.1300995 54.2215796,27.8892102 C54.2215796,20.648321 41.1107898,1 41.1107898,1 C41.1107898,1 28,20.648321 28,27.8892102 C28,35.1300995 33.8699005,41 41.1107898,41 Z"
                  />
                  <path
                    stroke="#B4DFFB"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M32,28 C32,32.9705627 36.0294373,37 41,37 L41,37"
                  />
                  <path
                    stroke="#FFF"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M13,46 C13,52.627417 18.372583,58 25,58 L25,58"
                  />
                </g>
              </svg>
            </div>

            <Knob
              v-model="value"
              class="water-knob"
              valueColor="#5f8eec"
              :max="8"
              :strokeWidth="6"
            />
          </div>
          <div class="text-white text-sm font-bold">Water Consumed</div>
        </div>
      </div>
      <div class="card mt-5">
        <BarChart />
      </div>
    </div>
    <div class="desktop-body">
      <div class="flex justify-content-between gap-4">
        <div class="card w-full mt-5">
          <LineChart v-if="sleepData.length" :data="sleepData.slice(0, 7)" />
          <div v-else class="flex align-items-center justify-content-center">
            <i
              class="pi pi-spin pi-spinner"
              style="color: var(--primary); font-size: 2rem"
            />
          </div>
        </div>
        <div class="card w-full mt-5">
          <BarChart />
        </div>
      </div>
      <div class="flex justify-content-between gap-4">
        <div
          class="doughnut-chart w-full steps-card card flex flex-column justify-content-center align-items-center mt-5"
        >
          <div class="flex justify-content-center align-items-center">
            <div class="svg-container">
              <svg
                fill="#ca922b"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="60px"
                height="60px"
                viewBox="0 0 515.458 515.458"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M298.794,386.711c27.805,9.522,52.357,15.587,87.633,26.427C372.875,584.374,210.952,516.371,298.794,386.711z
		 M443.366,229.409c-1.826-51.415-10.882-118.86-83.017-108.292c-33.815,8.825-58.8,45.962-70.551,110.035
		c-6.454,35.229-2.701,84.678,4.912,114.32c6.951,20.889,4.587,19.605,12.058,23.572c28.916,6.514,57.542,13.725,86.693,21.078
		C423.075,369.209,447.397,258.182,443.366,229.409z M220.752,225.463c7.607-29.646,11.36-79.095,4.909-114.32
		C213.919,47.067,188.931,9.924,155.11,1.105C82.975-9.463,73.919,57.981,72.093,109.399
		c-4.031,28.768,20.294,139.802,49.911,160.711c29.149-7.353,57.771-14.558,86.696-21.078
		C216.162,245.069,213.798,246.352,220.752,225.463z M129.029,293.132c13.547,171.234,175.47,103.231,87.63-26.427
		C188.854,276.228,164.304,282.292,129.029,293.132z"
                  />
                </g>
              </svg>
            </div>
            <Knob
              v-model="steps"
              class="steps-knob"
              valueColor="#dd9e2b"
              :max="steps > 10000 ? steps : 10000"
              :strokeWidth="6"
            />
          </div>
          <div class="text-white text-sm font-bold">Steps</div>
        </div>
        <div
          class="doughnut-chart w-full flex flex-column justify-content-center align-items-center water-card card mt-5"
        >
          <div class="flex justify-content-center align-items-center">
            <div class="svg-container">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#B4DFFB"
                    d="M26.6995662,63 C36.4747667,63 44.3991324,55.0756343 44.3991324,45.3004338 C44.3991324,35.5252333 26.6995662,9 26.6995662,9 C26.6995662,9 9,35.5252333 9,45.3004338 C9,55.0756343 16.9243657,63 26.6995662,63 Z"
                  />
                  <path
                    fill="#4796E7"
                    d="M41.1107898,41 C48.351679,41 54.2215796,35.1300995 54.2215796,27.8892102 C54.2215796,20.648321 41.1107898,1 41.1107898,1 C41.1107898,1 28,20.648321 28,27.8892102 C28,35.1300995 33.8699005,41 41.1107898,41 Z"
                  />
                  <path
                    stroke="#B4DFFB"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M32,28 C32,32.9705627 36.0294373,37 41,37 L41,37"
                  />
                  <path
                    stroke="#FFF"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M13,46 C13,52.627417 18.372583,58 25,58 L25,58"
                  />
                </g>
              </svg>
            </div>

            <Knob
              v-model="value"
              class="water-knob"
              valueColor="#5f8eec"
              :max="8"
              :strokeWidth="6"
            />
          </div>
          <div class="text-white text-sm font-bold">Water Consumed</div>
        </div>
      </div>
    </div>
    <div>
      <div class="blog-heading mt-3">Blogs</div>

      <div class="blogs-container gap-4 mt-4">
        <div v-for="blog in blogs" class="blog card" :key="blog._id">
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
      </div>
    </div>
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
.doughnut-chart {
  width: 48%;
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
  /* background-color: red; */
  color: var(--primary);
  min-width: 152px;
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
.water-card {
  background: linear-gradient(
    0deg,
    rgba(0, 203, 249, 1) 0%,
    rgba(13, 65, 224, 1) 100%
  );
}
.steps-card {
  background: linear-gradient(
    0deg,
    rgba(249, 165, 0, 1) 0%,
    rgba(249, 224, 9, 1) 100%
  );
}
</style>
