<template>
  <div class="main-page_block">
    <div class="input_block">
      <input
        type="text"
        class="input_main"
        placeholder="Search Public Guides"
      />
      <Icon icon="material-symbols:search" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.input_block {
  position: relative;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #adadad;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 7%;
    top: 10%;
  }
}
.input_main {
  outline: none;
  background: #606060;
  width: 80%;
  margin: 0 20px;
  border: none;
  border-radius: 10px;
  color: #adadad;
  padding: 10px 20px 10px 50px;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: #adadad;
}
</style>
