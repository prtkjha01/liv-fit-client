<script setup lang="ts">
const router = useRouter();
</script>
<template>
  <div class="flex align-items-center gap-2">
    <i class="pi pi-chevron-left" @click="router.back()" />
    <span>Privacy & Security</span>
  </div>
</template>
<style scoped></style>
