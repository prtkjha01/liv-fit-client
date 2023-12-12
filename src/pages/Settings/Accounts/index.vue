<script setup lang="ts">
import useSettingsStore from "@store/settings";

const router = useRouter();
onMounted(() => {
  useSettingsStore().getUserInfo();
});
const userInfo = computed(() => useSettingsStore().userInfo as any);
</script>
<template>
  <div class="flex align-items-center gap-2">
    <i class="pi pi-chevron-left" @click="router.back()" />
    <span>Account</span>
  </div>
  <div class="setting-options-wrapper">
    <div
      class="avatar-container flex justify-content-center align-items-center my-5"
    >
      <i class="pi pi-user" style="color: #fff; font-size: 2rem" />
    </div>
    <div class="flex flex-column gap-2 form-input w-full">
      <label for="name">Name</label>
      <InputText id="name" v-model="userInfo.name" placeholder="User's Name" />
    </div>
    <div class="flex flex-column gap-2 form-input mt-2 w-full">
      <label for="email">Email</label>
      <InputText
        id="email"
        v-model="userInfo.email"
        placeholder="User's Email"
      />
    </div>
    <div class="flex flex-column gap-2 form-input mt-2 w-full">
      <label for="mobile">Mobile</label>
      <InputText
        id="mobile"
        v-model="userInfo.mobile"
        placeholder="User's Mobile"
      />
    </div>
    <div class="flex flex-column gap-2 form-input mt-2 w-full">
      <label for="age">Age</label>
      <InputText id="age" v-model="userInfo.age" placeholder="User's Age" />
    </div>
  </div>
  <Button label="Save Changes" class="w-full mt-3" severity="primary" />
</template>
<style scoped>
.setting-options-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.avatar-container {
  background-color: var(--primary);
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
<style></style>
