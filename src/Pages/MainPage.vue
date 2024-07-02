<template>
  <div class="main-page_block">
    <div class="input_block">
      {{ tg.initDataUnsafe.user }}
      <input
        type="text"
        class="input_main"
        placeholder="Найдите нужные гайды"
      />
      <Icon icon="gravity-ui:magnifier" />
    </div>
    <div class="block_info">
      <div class="info_list">
        <p
          class=""
          @click="currentInfo = 'Top Picks'"
          :class="{ activeInfo: currentInfo == 'Top Picks' }"
        >
          Топ-10
        </p>
        <p
          class=""
          @click="currentInfo = 'My GPTs'"
          :class="{ activeInfo: currentInfo == 'My GPTs' }"
        >
          <Icon icon="material-symbols:star" />
          Мои гайды
        </p>
        <p
          class=""
          @click="currentInfo = 'Featured'"
          :class="{ activeInfo: currentInfo == 'Featured' }"
        >
          Избранное
        </p>
        <p
          class=""
          @click="currentInfo = 'Trand'"
          :class="{ activeInfo: currentInfo == 'Trand' }"
        >
          Новые
        </p>
      </div>
    </div>
    <div class="featured_block">
      <MainGuides v-if="currentInfo == 'My GPTs'" />
      <TopGuides v-if="currentInfo == 'Top Picks'" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import MainGuides from "@/components/MineGuides.vue";
import TopGuides from "@/components/TopGuides.vue";

const currentInfo = ref("Top Picks");

let tg = window.Telegram.WebApp;
</script>

<style lang="scss">
* {
  margin: 0;
}
.curr_item {
  background: var(--bg-gray);
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  max-width: 500px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .item_text {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    overflow: hidden;
  }
  .text_header {
    color: #fff;
  }
  .text_header,
  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 100px;
    max-width: 100%;
  }
  a {
    font-size: 12px;
    text-decoration: none;
    color: #4cacff;

    margin-top: 5px;
  }
  .text_content {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    max-height: 35px;
    font-size: 14px;
    margin-top: 5px;
  }
}
.block_info {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
}

.featured_block {
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.76);
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
  h3 {
    color: #fff;
    margin-bottom: 5px;
    font-size: 40px;
    font-weight: 100;
  }
  .featured_content {
    width: 90%;
  }
}
.info_list {
  display: flex;
  margin: 0 0 20px 0;
  width: 90%;
  overflow-x: scroll;
  scrollbar-width: none;
  p {
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-gray);
    text-align: center;
    padding: 7px 10px;
    margin-right: 10px;
    border-radius: 4px;
    font-weight: 500;
    color: #fff;
    span svg {
      color: #fff;
    }
  }
  .activeInfo {
    background: #fff;
    color: #000;
    svg {
      color: #000;
    }
  }
}
.input_block {
  position: relative;
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 7%;
    top: 10%;
  }
}
.input_main {
  outline: none;
  background: var(--bg-gray);
  width: 80%;
  margin: 0 20px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 20px 10px 50px;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: #adadad;
}
</style>
