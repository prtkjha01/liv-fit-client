<script setup lang="ts">
import useTutorialStore from "@store/tutorial";

onMounted(() => {
  getTutorials();
});
const getTutorials = () => {
  loading.value = true;
  useTutorialStore()
    .getTutorials()
    .then(() => {
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
};
const loading = ref<boolean>(false);
const tutorials = computed(() => useTutorialStore().tutorials);
// const showMore = ref<boolean>(false);
// const videoRedirect = (link: string) => {
//   window.open(link);
// };
</script>
<template>
  <header class="mt-3 header-title">Tutorials</header>
  <div class="card-container mt-4">
    <div
      v-if="!loading"
      v-for="tutorial in tutorials"
      :key="tutorial._id"
      class="card my-3"
    >
      <div class="exercise-name flex justify-content-between">
        {{ tutorial.exercise.name }}
        <div @click="tutorial.showMore = !tutorial.showMore">
          <i
            :class="
              tutorial.showMore ? 'pi pi-chevron-up' : 'pi pi-chevron-down'
            "
          />
        </div>
      </div>
      <div class="flex gap-2 pt-2">
        <Chip
          v-for="(muscle, index) in tutorial.exercise.targeted_muscles"
          :key="index"
          :label="muscle"
          class="muscle-chip"
        />
      </div>
      <div v-show="tutorial.showMore" class="exercise-description pt-3">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              :src="tutorial.reference_video"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            />
          </div>
        </vue-plyr>
        <div class="mt-3 h-10rem overflow-scroll">
          {{ tutorial.description }}
        </div>
      </div>
      <!-- <div>{{ tutorial.targeted_muscles }}</div> -->
    </div>
    <div
      v-else
      v-for="i in 5"
      :key="i"
      class="card flex justify-content-between gap-2 mt-2"
    >
      <div>
        <Skeleton
          width="8rem"
          height="2rem"
          style="background-color: rgba(58, 58, 58, 0.644)"
        />
        <div class="flex gap-2 mt-2">
          <Skeleton
            v-for="j in 3"
            :key="j"
            width="4rem"
            height="1rem"
            style="background-color: rgba(58, 58, 58, 0.644)"
          />
        </div>
      </div>
      <Skeleton
        width="1rem"
        height="1rem"
        class="mt-1"
        style="background-color: rgba(58, 58, 58, 0.644)"
      />
    </div>
  </div>
</template>
<style scoped>
.muscle-chip.p-chip {
  border: 1px solid var(--primary);
  background-color: #000;
  color: var(--primary);
  font-size: 12px;
}
.exercise-name,
.exercise-description {
  color: var(--primary);
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.card {
  background-color: #191919;
  padding: 10px;
}
@media only screen and (min-width: 360px) and (max-width: 520px) {
  .card-container {
    display: block;
  }
}
</style>
