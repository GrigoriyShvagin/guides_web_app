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
* {
  font-family: sans-serif;
}
</style>
