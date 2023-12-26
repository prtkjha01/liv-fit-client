<script setup lang="ts">
onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
  // console.log(getPastDates(7).reverse());
});
const props = defineProps({
  data: {
    type: Array,
  },
});
const chartData = ref();
const chartOptions = ref();
// const today = new Date();
const getPastDates = (n: number): string[] => {
  let pastDates = [];
  let currentDate = new Date();

  for (let i = 0; i < n; i++) {
    // Add the current date to the array
    pastDates.push(new Date(currentDate).toDateString().slice(0, 3));

    // Move to the previous day
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return pastDates;
};
const setChartData = () => {
  return {
    labels: getPastDates(7).reverse(),
    // ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    datasets: [
      {
        label: "Sleep",
        data: props.data,
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = "#dd9e2b";
  //   documentStyle.getPropertyValue(
  //     "--text-color-secondary"
  //   );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
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
          color: textColorSecondary,
        },
        grid: {
          display: false,
          color: textColorSecondary,
        },
        border: {
          color: textColorSecondary,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          display: false,
          color: surfaceBorder,
        },
        border: {
          color: textColorSecondary,
        },
      },
    },
  };
};
</script>
<template>
  <Chart
    type="line"
    :data="chartData"
    :options="chartOptions"
    class="line-chart"
  />
</template>
<style scoped>
.line-chart {
  margin-top: 1.5rem;
}
@media only screen and (min-width: 360px) and (max-width: 520px) {
  .line-chart {
    margin-top: 0;
  }
}
</style>
