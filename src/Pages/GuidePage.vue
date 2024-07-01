<template>
  <div class="content">
    <div class="header">
      <span><Icon icon="material-symbols:keyboard-arrow-left" /></span>Гайд :
      {{ currentGuide.name }}
    </div>
    <img :src="currentGuide.mainImg" alt="" />
    <p class="decription">Описание : {{ currentGuide.description }}</p>
    <p class="author">Автор : @{{ currentGuide.author }}</p>
    <p class="categories">
      Категории : {{ currentGuide.categories?.join(" / ") }}
    </p>
    <div class="chapters_list" v-if="currentGuide.chaptersList != null">
      <div
        class="chapter"
        v-for="item in currentGuide.chaptersList"
        :key="item.id"
      >
        <p class="item_name" @click="checkCurrChap(item.id)">
          Глава {{ item.id }}: {{ item.name }}
        </p>
        <Transition
          ><div
            class="item_content"
            v-if="currChap == item.id"
            v-html="item.content"
          ></div
        ></Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const currChap = ref(null);
const currentGuide = {
  name: " создаем своего тг-бота за час",
  mainImg:
    "https://avatars.mds.yandex.net/get-socsnippets/12856884/2a000001906d32e893ab401096c1d21b0199/square_83",
  description:
    "Купив этот гайд, вы сможете  создавать тг ботов для ваших целей, задач и бизнеса",
  author: "mapActions",
  categories: ["IT", "Технологии", "Python Bots"],
  chaptersList: [
    {
      id: 1,
      name: "Вступление, основы",
      content:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ],
};

function checkCurrChap(id) {
  if (currChap.value == id) {
    currChap.value = null;
  } else {
    currChap.value = id;
  }
}
</script>

<style scoped>
* {
  color: white;
}
</style>
