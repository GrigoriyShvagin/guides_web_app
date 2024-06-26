<template>
  <div class="footer_block">
    <div
      class="icon_block"
      @click="$router.push('/')"
      :class="{ active: $route.path == '/' }"
    >
      <Icon icon="carbon:home" />
      <span class="">Main</span>
    </div>
    <div
      class="icon_block"
      @click="$router.push('/add')"
      :class="{ active: $route.path == '/add' || $route.path == '/add_form' }"
    >
      <Icon icon="simple-line-icons:plus" />
      <span>Add</span>
    </div>
    <div
      class="icon_block"
      @click="$router.push('/earn')"
      :class="{ active: $route.path == '/earn' }"
    >
      <Icon icon="healthicons:money-bag-outline" />
      <span>Earn</span>
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
    color: #ffffff89;
    height: 45px;
    width: 45px;
    margin-bottom: 5px;
    transition: 0.3s;
  }
  span {
    transition: 0.3s;
  }
  .icon_block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    padding: 7px 15px;
    background: #313131;
    color: #ffffff89;
    font-size: 14px;
    border-radius: 10px;
  }
}
.active {
  svg,
  span {
    color: #fff;
  }
}
</style>
