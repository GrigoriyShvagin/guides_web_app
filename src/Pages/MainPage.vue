<template>
  <router-link to="/next">{{ a }}</router-link>
</template>

<script setup>
const a = `${window.innerHeight},${window.innerWidth}`;
</script>

<style lang="scss"></style>
