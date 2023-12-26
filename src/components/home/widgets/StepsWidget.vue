<script setup lang="ts">
import useHomepageStore from "@/store/homepage";
const steps = computed(() => useHomepageStore().steps as number);
</script>
<template>
  <div
    class="steps-card card flex flex-column justify-content-center align-items-center mt-5"
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
        valueTemplate="{value}"
        :max="steps > 10000 ? steps : 10000"
        :strokeWidth="6"
      />
    </div>
    <div class="text-white text-sm font-bold">Steps</div>
  </div>
</template>
<style scoped>
.steps-card {
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(249, 165, 0, 1) 0%,
    rgba(249, 224, 9, 1) 100%
  );
}
@media only screen and (min-width: 360px) and (max-width: 520px) {
  .steps-card {
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
