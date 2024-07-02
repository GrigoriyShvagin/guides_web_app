<template>
  <div class="content">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + currentGuide.mainImg + ')' }"
    >
      <p class="">
        {{ currentGuide.name }}
      </p>
    </div>
    <div class="text-content">
      <p class="categories">
        Категории : {{ currentGuide.categories?.join(" / ") }}
      </p>
      <p class="decription">{{ currentGuide.description }}</p>
      <p class="author">Автор : @{{ currentGuide.author }}</p>
      <div class="chapters_list" v-if="currentGuide.chaptersList != null">
        <div
          class="chapter"
          v-for="item in currentGuide.chaptersList"
          :key="item.id"
        >
          <p class="item_name" @click="checkCurrChap(item.id)">
            Глава {{ item.id }}: {{ item.name }}
            <span
              ><Icon
                icon="solar:alt-arrow-right-line-duotone"
                :class="{ activeArrow: currChap == item.id }"
            /></span>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const currChap = ref(null);
const currentGuide = {
  name: "Cоздаем своего тг-бота за час",
  mainImg:
    "https://s3-alpha-sig.figma.com/img/db2c/af15/1b17d869758b780a2ea2a249d675c43b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W83JXZKkReFZi-2UHTqlMiB2EKRtzVqEZtWY~JT1h5K3oFZSw6FDyqcebgefJxAIjBA15mAap83G1kSlpiV6akL5GngEhpI1-0zhTWR6g0ugzzFsitfVx77J5O4WqipnckbHoDwucxSeEYMNNMIMcVYSxe~swC9exlPHsiCA1E7qCVJPHuttmraxOe9tlPk99o3XAwVzHWfGF53zAT7jya6VBKY7KZYGZ4BuvjzfMycFF8Wq3RLeAiZg4ivJ5MwBlJzAfEILsRNnxY~Td4~zjjDySvoTqZgTb3L3JYC2KEc20K4Sn-kksOwDZCvZVfIldQcEubj-cmnjyQtJ0b0izA__",
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
    {
      id: 2,
      name: "Вступление, основы",
      content:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      name: "Вступление, основы",
      content:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 4,
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

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.text-content {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 300;
  .categories {
    font-size: 12px;
    color: var(--text-gray);
  }
  .description {
    color: var(--text-white);
  }
  .author {
    color: var(--text-link);
    padding: 0 0 10px 0;
    border-bottom: 1px solid var(--border-gray);
  }
  .chapter {
    transition: 0.3s;
    border-bottom: 1px solid var(--border-gray);
    .item_name {
      color: var(--text-gray);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 10px;

      svg {
        height: 20px;
        transition: 0.3s;
      }
    }
    .item_content {
      padding-bottom: 10px;
      color: var(--text-gray);
    }
  }
}
.header {
  height: 300px;
  font-size: 26px;
  background-size: cover;
  background-position: 50%;
  font-weight: 700;
  position: relative;
  border-radius: 0 0 30px 30px;
  p {
    position: absolute;
    top: 230px;
    margin: 0px;
    left: 20px;
  }
  img {
    height: 250px;
    width: 100%;
    border-radius: 0 0 30px 30px;
  }
}
* {
  color: white;
}
.activeArrow {
  transform: rotate(90deg);
}
</style>
