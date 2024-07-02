<template>
  <router-view class="router-view"></router-view>
  <FooterSection class="footer"></FooterSection>
</template>

<script setup>
import FooterSection from "@/components/Footer.vue";
</script>

<style lang="scss">
.router-view {
  margin-bottom: 85px;
}
body {
  background: var(--main-bg);
  color: var(--tg-theme-text-color);
}
.footer {
  position: fixed;
  bottom: 0%;
}
</style>
