<template>
  <router-view></router-view>
  <FooterSection class="footer"></FooterSection>
</template>

<script setup>
import FooterSection from "@/components/Footer.vue";
</script>

<style lang="scss">
body {
  background: var(--main-bg);
  color: var(--tg-theme-text-color);
}
.footer {
  position: fixed;
  bottom: 0%;
}
</style>
