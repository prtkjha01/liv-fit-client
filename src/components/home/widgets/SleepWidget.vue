<script setup lang="ts">
import useHomepageStore from "@/store/homepage";
const steps = computed(() => useHomepageStore().steps as number);
</script>
<template>
  <div
    class="sleep-card card flex flex-column justify-content-center align-items-center mt-5"
  >
    <div class="flex justify-content-center align-items-center">
      <div class="svg-container">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 75.99 75.99"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          baseProfile="full"
          enable-background="new 0 0 75.99 75.99"
          xml:space="preserve"
          fill="#919191"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#919191"
              fill-opacity="1"
              stroke-width="0.2"
              stroke-linejoin="round"
              d="M 41.1615,61.029C 28.0464,61.029 17.4145,50.3971 17.4145,37.2819C 17.4145,26.1675 25.0501,16.8364 35.3618,14.2482C 31.1173,18.5382 28.4964,24.4378 28.4964,30.9494C 28.4964,44.0645 39.1283,54.6964 52.2435,54.6964C 54.2442,54.6964 56.1871,54.449 58.0432,53.9831C 53.7389,58.3336 47.765,61.029 41.1615,61.029 Z M 49.9383,49.0772L 43.2883,49.0772L 43.2883,48.1882L 47.0243,43.3139L 43.7316,43.3139L 43.7316,41.6883L 49.9383,41.6883L 49.9383,42.7574L 46.3985,47.4517L 49.9383,47.4517L 49.9383,49.0772 Z M 56.2341,39.5784L 47.6841,39.5784L 47.6841,38.4354L 52.4875,32.1684L 48.2541,32.1684L 48.2541,30.0784L 56.2341,30.0784L 56.2341,31.4529L 51.683,37.4884L 56.2341,37.4884L 56.2341,39.5784 Z M 50.2606,28.4964L 39.8106,28.4964L 39.8106,27.0995L 45.6815,19.4398L 40.5073,19.4398L 40.5073,16.8853L 50.2606,16.8853L 50.2606,18.5653L 44.6982,25.942L 50.2606,25.942L 50.2606,28.4964 Z "
            ></path>
          </g>
        </svg>
      </div>
      <Knob
        v-model="steps"
        class="steps-knob"
        valueColor="#919191"
        valueTemplate="{value}"
        :max="steps > 10000 ? steps : 10000"
        :strokeWidth="6"
      />
    </div>
    <div class="text-white text-sm font-bold">Hours</div>
  </div>
</template>
<style scoped>
.sleep-card {
  width: 100%;
  background: rgb(240, 240, 240);
  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 1) 0%,
    rgba(156, 156, 156, 1) 100%
  );
}
@media only screen and (min-width: 360px) and (max-width: 520px) {
  .sleep-card {
    width: 48%;
  }
}
</style>
<style>
.steps-knob .p-knob-text {
  font-size: 16px;
  font-weight: 500;
  width: 30px;
}
</style>
