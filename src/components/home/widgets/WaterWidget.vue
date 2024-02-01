<script setup lang="ts">
import useHomepageStore from "@/store/homepage";
// const value = ref(7);
const glassesOfWater = computed(
  () => useHomepageStore().glassesOfWater as number
);
</script>
<template>
  <div
    class="flex flex-column justify-content-center align-items-center water-card card mt-5"
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
        v-model="glassesOfWater"
        class="water-knob"
        valueColor="#5f8eec"
        valueTemplate="{value} Glasses"
        :max="8"
        :strokeWidth="6"
      />
    </div>
    <div class="text-white text-sm font-bold">Water Consumed</div>
  </div>
</template>
<style scoped>
.water-card {
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 203, 249, 1) 0%,
    rgba(13, 65, 224, 1) 100%
  );
}

@media only screen and (min-width: 360px) and (max-width: 520px) {
  .water-card {
    width: 48%;
  }
}
</style>
<style>
.water-knob .p-knob-text {
  font-size: 14px;
  font-weight: 500;
  width: 30px;
}
</style>
