<template>
  <div class="featured_content">
    <h3>{{ t("TopPicks") }}</h3>
    <p class="header_discr">
      {{ t("TopPicksDesc") }}
    </p>
    <div class="list_items">
      <a
        :href="`/guide/` + item.id"
        class="curr_item"
        v-for="item in listItems"
        :key="item.id"
      >
        <img :src="item.img" alt="" />
        <div clasf="item_text">
          <div class="text_header">
            {{ item.title }}
          </div>
          <div class="text_content">
            {{ item.description }}
          </div>
          <a :href="item.link">@{{ item.Author }}</a>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const listItems = [
  {
    id: 1,
    title: "Первый гайд по тг",
    img: "/icon.png", //заменить на нормальную ссылку с бека,
    description:
      "Купив этот гайд, вы сможете  создавать тг ботов для ваших целей, задач и бизнеса",
    Author: "GrigoriySh",
    tags: ["It", "Технологии", "Соц.сети"],
    link: "https://t.me/mapActions",
  },
  {
    id: 2,
    title: "Второй гайд по тг",
    img: "/icon.png", //заменить на нормальную ссылку с бека,
    description:
      "Купив этот гайд, вы сможете  создавать тг ботов для ваших целей, задач и бизнеса",
    Author: "GrigoriySh",
    tags: ["It", "Технологии", "Соц.сети"],
    link: "https://t.me/mapActions",
  },
  {
    id: 3,
    title: "Третий гайд по тг",
    img: "/icon.png", //заменить на нормальную ссылку с бека,
    description:
      "Купив этот гайд, вы сможете  создавать тг ботов для ваших целей, задач и бизнеса",
    Author: "GrigoriySh",
    tags: ["It", "Технологии", "Соц.сети"],
    link: "https://t.me/mapActions",
  },
];
</script>

<style lang="scss">
.block_change {
  .item {
    background: var(--bg-gray);
    border-radius: 4px;
    transition: 0.5s;
  }
  .active {
    background: var(--active-info-bg);
    color: var(--active-info-text);
  }
}
.text_header {
  color: var(--active-info-bg) !important;
}
.change_items {
  display: flex;
  width: 100%;
  .item {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
}
</style>
