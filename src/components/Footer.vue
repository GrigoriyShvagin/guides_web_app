<template>
  <div class="footer_block">
    <div
      class="icon_block main"
      @click="$router.push('/')"
      :class="{ active: $route.path == '/' }"
    >
      <Icon icon="iconoir:home-simple" />
      <span>{{ t("MainPage") }}</span>
    </div>
    <div
      class="icon_block add"
      @click="$router.push('/add')"
      :class="{ active: $route.path == '/add' || $route.path == '/add_form' }"
    >
      <Icon icon="simple-line-icons:plus" />
      <span>{{ t("GuidePage") }}</span>
    </div>
    <div
      class="icon_block earn"
      @click="$router.push('/earn')"
      :class="{ active: $route.path == '/earn' }"
    >
      <Icon icon="gravity-ui:shopping-bag" />
      <span>{{ t("EarnPage") }}</span>
    </div>
  </div>
</template>

<script setup>
defineComponent({ name: "FooterSection" });
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<style lang="scss" scoped>
.footer_block {
  width: 100vw;
  background: var(--bg-footer);
  height: 55px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  svg {
    color: var(--text-white);
    height: 22px;
    width: 22px;
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
    color: var(--text-white);
    font-size: 12px;
    border-radius: 4px;
    &.main {
      padding: 0px 0 0 30px;
    }
    &.earn {
      padding: 0px 30px 0 0;
    }
    span {
      display: block;
    }
  }
}
.active {
  svg {
    padding: 2px 10px;
    background: var(--active-footer);
    color: var(--button-up-bg);
    border-radius: 20px;
  }
}
@media screen and (max-width: 360px) {
  .icon_block {
    margin-left: 13px;
  }
}
@media screen and (min-width: 360px) and (max-width: 390px) {
  .icon_block {
    margin-left: 17px;
  }
  .add {
    margin-right: 5px;
  }
}
@media screen and (min-width: 390px) {
  .icon_block {
    margin-left: 4vw;
  }
}
</style>
