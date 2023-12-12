<template>
  <div class="card flex justify-content-center">
    <Chart
      type="doughnut"
      :data="chartData"
      :options="chartOptions"
      class="w-full md:w-30rem"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: [
      "A",
      // , "B"
      // , "C"
    ],
    datasets: [
      {
        data: [
          540,
          // , 325
          // , 702
        ],
        backgroundColor: [
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--green-500"),
        ],

        borderColor: [
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--green-500"),
        ],

        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--green-400"),
        ],
        // borderRadius: 100,
        // spacing: 5,
        cutout: 30,
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");

  return {
    plugins: {
      legend: {
        display: false,
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
};
</script>
