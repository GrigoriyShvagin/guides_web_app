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
                :class="{ activeArrow: currChap.includes(item.id) }"
            /></span>
          </p>
          <Transition
            ><div class="item_content" v-if="currChap.includes(item.id)">
              <img
                v-if="item.content.img"
                :src="item.content.img"
                alt=""
                srcset=""
              />
              <p>{{ item.content.text }}</p>
              <video v-if="item.content.video" controls>
                <source :src="item.content.video" />
              </video></div
          ></Transition>
        </div>
      </div>
    </div>
    <div class="button_up" @click="scroll">
      <Icon icon="solar:alt-arrow-right-line-duotone" />
      <p>Наверх</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const currChap = ref([]);
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
      content: {
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        img: "https://www.funnyart.club/uploads/posts/2022-12/1671309642_www-funnyart-club-p-kartinki-s-krasivim-fonom-krasivo-15.jpg",
        video: "/video/video.mp4",
      },
    },
    {
      id: 2,
      name: "Вступление, основы",
      content: {
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        img: "https://www.funnyart.club/uploads/posts/2022-12/1671309642_www-funnyart-club-p-kartinki-s-krasivim-fonom-krasivo-15.jpg",
        video: "",
      },
    },
    {
      id: 3,
      name: "Вступление, основы",
      content: {
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        img: "",
        video: "/video/video.mp4",
      },
    },
    {
      id: 4,
      name: "Вступление, основы",
      content: {
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        img: "",
        video: "",
      },
    },
  ],
};

function scroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function checkCurrChap(id) {
  if (currChap.value.includes(id)) {
    for (let i = 0; i < currChap.value.length; i++) {
      currChap.value[i] == id ? currChap.value.splice(i, 1) : 0;
    }
  } else {
    currChap.value.push(id);
  }
}
</script>

<style scoped lang="scss">
.button_up {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  margin: 10px 0 0 20px;
  padding: 10px 10px;
  background: white;
  p,
  svg {
    margin: 0;
    font-size: 16px;
    font-weight: 700;

    color: var(--button-up-color);
  }

  border-radius: 10px;
  svg {
    width: 20px;
    height: 20px;
    rotate: (-90deg);
  }
}
.content {
  position: relative;
}
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
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
      img {
        width: 100%;
        border-radius: 15px;
        max-height: 200px;
      }
      p {
        color: var(--text-gray);
      }
      video {
        width: 100%;
      }
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
  p {
    position: absolute;
    top: 230px;
    margin: 0px;
    left: 20px;
    right: 10px;
  }
  img {
    height: 250px;
    width: 100%;
  }
}
* {
  color: white;
}
.activeArrow {
  transform: rotate(90deg);
}
</style>
