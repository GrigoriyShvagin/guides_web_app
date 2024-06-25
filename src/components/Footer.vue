<template>
  <div class="footer_block">
    <div class="icon_block" @click="$router.push('/')">
      <Icon icon="carbon:home" />
      <span class="">Main</span>
    </div>
    <div class="icon_block" @click="$router.push('/add')">
      <Icon icon="simple-line-icons:plus" />
      Add
    </div>
    <div class="icon_block" @click="$router.push('/earn')">
      <Icon icon="healthicons:money-bag-outline" />
      Earn
    </div>
  </div>
</template>

<script setup>
defineComponent({ name: "FooterSection" });
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
</script>

<style lang="scss" scoped>
.footer_block {
  width: 100vw;
  background: #000;
  height: 70px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;
  svg {
    color: #fff;
    height: 45px;
    width: 45px;
    margin-bottom: 5px;
  }
  .icon_block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    padding: 7px 15px;
    background: #313131;
    color: #fff;
    font-size: 14px;
    border-radius: 10px;
  }
}
</style>
