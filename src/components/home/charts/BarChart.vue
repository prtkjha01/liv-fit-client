<script setup lang="ts">
onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  //   const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Weight",
        backgroundColor: "#dd9e2b",
        borderColor: "red",
        // maxBarThickness: 10,
        // grouped: false,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      //   {
      //     label: "My Second dataset",
      //     backgroundColor: documentStyle.getPropertyValue("--pink-500"),
      //     borderColor: documentStyle.getPropertyValue("--pink-500"),
      //     data: [28, 48, 40, 19, 86, 27, 90],
      //   },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const primary = "#dd9e2b";
  const textColor = documentStyle.getPropertyValue("--text-color");
  //   const textColorSecondary = documentStyle.getPropertyValue(
  //     "--text-color-secondary"
  //   );
  const surfaceBorder = "red";
  //documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: primary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          color: primary,
        },
      },
      y: {
        ticks: {
          color: primary,
        },
        grid: {
          display: false,
          color: surfaceBorder,
          drawBorder: false,
        },
        border: {
          color: primary,
        },
      },
    },
  };
};
</script>
<template>
  <Chart type="bar" :data="chartData" :options="chartOptions" class="h-20rem" />
</template>
