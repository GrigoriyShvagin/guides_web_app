<template>
  <div class="featured_content">
    <h3>Топ-10</h3>
    <p class="header_discr">
      Список обновляется каждый месяц, начиная с 15 числа
    </p>
    <div class="list_items">
      <div
        class="curr_item"
        v-for="item in listItems"
        :key="item.id"
        @click="$router.push(`/guide/${item.id}`)"
      >
        <img :src="item.img" alt="" />
        <div class="item_text">
          <div class="text_header">
            {{ item.title }}
          </div>
          <div class="text_content">
            {{ item.description }}
          </div>
          <a :href="item.link">@{{ item.Author }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    background: white;
    color: black;
  }
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
