<template>
  <router-view class="router-view"></router-view>
  <FooterSection class="footer"></FooterSection>
</template>

<script setup>
import FooterSection from "@/components/Footer.vue";
import { onBeforeMount } from "vue";

function setTheme() {
  document.documentElement.setAttribute("theme", localStorage.getItem("theme"));
}
onBeforeMount(setTheme);
</script>

<style lang="scss">
.router-view {
  padding-bottom: 85px;
}
body {
  background: var(--main-bg);
  color: var(--tg-theme-text-color);
  transition: ease 0.5s;
}
.footer {
  position: fixed;
  bottom: 0%;
}
</style>
