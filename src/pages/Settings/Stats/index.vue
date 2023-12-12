<script setup lang="ts">
import useSettingsStore from "@/store/settings";

const router = useRouter();

onMounted(() => {
  useSettingsStore().getStats();
});
const stats = computed(() => useSettingsStore().stats as any);
</script>
<template>
  <div class="flex align-items-center gap-2">
    <i class="pi pi-chevron-left" @click="router.back()" />
    <span>Stats</span>
  </div>
  <div class="setting-options-wrapper">
    <div class="flex flex-column gap-2 form-input form-input mt-5 w-full">
      <label for="height">Height</label>
      <InputText
        id="height"
        v-model="stats.height"
        aria-describedby="height-help"
      />
    </div>
    <div class="flex flex-column gap-2 form-input form-input mt-2 w-full">
      <label for="weight">Weight</label>
      <InputText
        id="weight"
        v-model="stats.weight"
        aria-describedby="weight-help"
      />
    </div>
    <div class="flex flex-column gap-2 form-input form-input mt-2 w-full">
      <label for="blood-group">Blood Group</label>
      <InputText
        id="blood-group"
        v-model="stats.blood_group"
        aria-describedby="blood-group-help"
      />
    </div>
  </div>
</template>
<style scoped></style>
