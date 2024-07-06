<template>
  <component :is="layout" />
</template>

<script setup>
import { defineComponent } from "vue";
import { computed } from "vue";
import AppLayout from "./Layouts/AppLayout.vue";
defineComponent({ name: "App" });

const tg = window.Telegram.WebApp;
if (
  localStorage.getItem("theme") == "dark" ||
  localStorage.getItem("theme") == null
) {
  tg.setHeaderColor("#0d0d0d");
  tg.setBackgroundColor("#2f2f2f");
  tg.backgroundColor = "#2f2f2f";
} else {
  tg.setHeaderColor("#fcfcfc");
  tg.setBackgroundColor("#fcfcfc");
}

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
  --slide-menu-bg: #1d1d1d;
  --active-info-bg: #fff;
  --active-info-text: #000;
  --bg-footer: #424242;
  --bg-input: #242424;
}
[theme="light"] {
  --bg-footer: #ffffff;
  --main-bg: #fcfcfc;
  --bg-gray: #e6e6e6;
  --text-gray: #313131;
  --active-info-bg: #0d0d0d;
  --active-info-text: #fff;
  --text-white: #2a2a2a;
  --bg-input: #e3e3e3;
  --button-up-bg: #000;
  --text-black: #fff;
  --button-up-color: #e3e3e3;
  --slide-menu-bg: #cfcfcf;
}
* {
  font-family: sans-serif;
}
</style>
