<template>
  <component :is="layout" />
</template>

<script setup>
import { defineComponent } from "vue";
import { computed } from "vue";
import AppLayout from "./Layouts/AppLayout.vue";
defineComponent({ name: "App" });

Telegram.WebApp.setBackgroundColor("#0d0d0d");
const layout = computed(() => AppLayout);
</script>

<style>
body {
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
:root {
  --main-bg: #0d0d0d;
  --bg-gray: #2f2f2f;
  --bg-buttons: #454444;
  --active-footer: #0d99ff;
  --text-gray: #a2a2a2;
  --text-white: #e6e6e6;
  --text-black: black;
  --text-link: #00d1ff;
  --border-gray: #757575;
  --button-up-color: #242424;
  --button-up-bg: white;
}
* {
  font-family: sans-serif;
}
</style>
