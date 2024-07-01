<template>
  <component :is="layout" />
</template>

<script setup>
import { defineComponent } from "vue";
import { computed } from "vue";
import AppLayout from "./Layouts/AppLayout.vue";
defineComponent({ name: "App" });

const layout = computed(() => AppLayout);
</script>

<style>
body {
  margin: 0;
}
:root {
  --main-bg: #0d0d0d;
  --bg-gray: #2f2f2f;
  --bg-buttons: #454444;
  --active-footer: #0d99ff;
}
* {
  font-family: sans-serif;
}
</style>
