<template>
  <div class="footer_block">
    <div
      class="icon_block"
      @click="$router.push('/')"
      :class="{ active: $route.path == '/' }"
    >
      <Icon icon="iconoir:home-simple" />
      <span>Главная</span>
    </div>
    <div
      class="icon_block"
      @click="$router.push('/add')"
      :class="{ active: $route.path == '/add' || $route.path == '/add_form' }"
    >
      <Icon icon="simple-line-icons:plus" />
      <span>Создать</span>
    </div>
    <div
      class="icon_block"
      @click="$router.push('/earn')"
      :class="{ active: $route.path == '/earn' }"
    >
      <Icon icon="gravity-ui:shopping-bag" />
      <span>Заработок</span>
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
  background: var(--bg-gray);
  height: 70px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;
  svg {
    color: #ffffff;
    height: 25px;
    width: 25px;
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
    justify-content: center;
    margin-top: 5px;
    padding: 0px 6vw;
    color: #ffffff;
    font-size: 12px;
    border-radius: 4px;
    span {
      display: block;
    }
  }
}
.active {
  svg,
  span {
    color: var(--active-footer);
  }
}
</style>
