<template>
  <div class="main-page_block">
    <div class="input_block">
      <input
        type="text"
        class="input_main"
        :placeholder="t('mainInputPlaceholder')"
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
          {{ t("TopPicks") }}
        </p>
        <p
          class=""
          @click="currentInfo = 'My GPTs'"
          :class="{ activeInfo: currentInfo == 'My GPTs' }"
        >
          <Icon icon="material-symbols:star" />
          {{ t("MyGuides") }}
        </p>
        <p
          class=""
          @click="currentInfo = 'Featured'"
          :class="{ activeInfo: currentInfo == 'Featured' }"
        >
          {{ t("EngRu") }}
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
import { onMounted, ref } from "vue";
import MainGuides from "@/components/MineGuides.vue";
import TopGuides from "@/components/TopGuides.vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "@/store/userStore";

const { t } = useI18n({ useScope: "global" });

const currentInfo = ref("Top Picks");
  // let tgUnsafeData = window.Telegram.WebApp.initDataUnsafe;

  // tgUnsafeData.chat.id;

const userStore = useUserStore();
function setUser() {
  const params = {
    firstName: "tgUnsafeData.first_name",
    id: 223,
    lastName: "tgUnsafeData.last_name",
    username: "tgUnsafeData.username",
  };
  userStore.authUser({ params });
}
onMounted(setUser);
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
    color: var(--text-white);
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
  color: var(--text-gray);
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
  h3 {
    color: var(--active-info-bg);
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
  border-bottom: 3px solid var(--main-bg);
  p {
    min-width: 100px;
    padding: 5px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 10px;
    font-weight: 500;
    color: var(--text-white);
    span svg {
      color: #fff;
    }
  }
  .activeInfo {
    border-bottom: 3px solid var(--active-info-bg);
    color: var(--text-white);
    svg {
      color: var(--text-white);
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
    color: var(--text-gray);
    width: 30px;
    height: 30px;
    position: absolute;
    left: 7%;
    top: 10%;
  }
}
.input_main {
  outline: none;
  background: var(--bg-input);
  width: 80%;
  margin: 0 20px;
  border: none;
  border-radius: 4px;
  color: var(--text-gray);

  padding: 10px 20px 10px 50px;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: #adadad;
}
</style>
