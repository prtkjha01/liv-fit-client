<script setup lang="ts">
import useSettingsStore from "@/store/settings";
const router = useRouter();
const settings = computed(() => useSettingsStore().settings);
</script>
<template>
  <header class="mt-3 header-title">Settings</header>
  <div class="cards-container mt-5">
    <div
      v-for="setting in settings"
      :key="setting.id"
      class="card flex justify-content-between align-items-center mb-2"
      @click="router.push({ path: `/settings${setting.path}` })"
    >
      <div style="color: var(--primary)">{{ setting.name }}</div>
      <i class="pi pi-angle-right" style="color: var(--primary)" />
    </div>
  </div>
</template>
<style scoped>
.card {
  background-color: #191919;
  padding: 10px;
}
</style>
