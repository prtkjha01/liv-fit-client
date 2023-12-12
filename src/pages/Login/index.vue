<script setup lang="ts">
import useAuthStore from "@store/auth";
// import { getCookie } from "@/utils/cookies";
// const router = useRouter();
const loginPayload = reactive({
  email: null,
  password: null,
});
onMounted(() => {
  // console.log(getCookie("token"));
});
const loading = ref<boolean>(false);
const showPassword = ref<boolean>(false);
const handleLogin = () => {
  loading.value = true;
  useAuthStore()
    .login(loginPayload)
    .then(() => {
      loading.value = false;
      // router.push({
      //   path: "/",
      // });
      window.location.href = "/";
    })
    .catch((error) => {
      loading.value = false;
      alert(JSON.stringify(error.data));
      console.log(error);
    });
};
</script>
<template>
  <div class="login-wrapper flex flex-column justify-content-center">
    <div
      class="logo-wrapper flex align-items-center justify-content-center mb-6"
    >
      <img src="https://i.ibb.co/5FBCg4c/Liv.png" class="logo" alt="" />
    </div>
    <div class="card">
      <div class="heading text-center mb-4">
        <h1>Login to Liv Fit</h1>
      </div>
      <div class="flex flex-column gap-1">
        <label for="username">Username</label>
        <InputText
          id="username"
          class="w-full"
          v-model="loginPayload.email"
          type="text"
          placeholder="Enter username or mobile number"
        />
      </div>
      <div class="flex flex-column gap-1 mt-3">
        <label for="password">Password</label>
        <div class="p-input-icon-right">
          <InputText
            id="password"
            class="w-full"
            v-model="loginPayload.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            @keyup.enter="handleLogin"
          />
          <i
            :class="showPassword ? 'pi pi-eye' : 'pi pi-eye-slash'"
            @click="showPassword = !showPassword"
          />
        </div>
      </div>
      <Button
        class="login-btn w-full mt-4"
        label="Login"
        :loading="loading"
        @click="handleLogin"
      />
      <div class="separator flex align-items-center gap-1 mt-2">
        <div class="line" />
        <div class="or">or</div>
        <div class="line" />
      </div>
      <div class="login-with-google-btn flex justify-content-center gap-2 mt-2">
        <img
          src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
          class="google-logo"
          alt="google-logo"
        />
        <div>Login with Google</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login-wrapper {
  padding-top: 50px;
  max-height: 100vh;
}
.heading {
  color: #dd9e2b;
  font-weight: 900;
}
.logo {
  height: 120px;
  width: 120px;
  object-fit: contain;
  mix-blend-mode: difference;
}
.login-btn {
  background-color: #dd9e2b;
  border: none;
  font-family: "Raleway", sans-serif;
}
.line {
  width: 100%;
  height: 2px;
  background-color: #ededed;
}
.login-with-google-btn {
  border: 1px solid #ccc;
  border-radius: 8px;
  font-weight: 500;
  padding: 10px;
}
.show-password-icon {
  position: absolute;
}
.google-logo {
  height: 25px;
  width: 25px;
}
</style>
<style>
label {
  font-size: 13px;
  font-weight: 600;
}
.p-inputtext {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
}
</style>
