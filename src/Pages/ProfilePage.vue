<template>
  <div class="content">
    <div class="balance_block">
      <div class="balance_info">
        <p class="">
          {{ t("Balance") }} <span> <Icon icon="simple-icons:ton" />15 </span>
        </p>
        <Icon icon="solar:settings-linear" @click="settings = true" />
      </div>
      <div class="balance_buttons">
        <button type="button" class="white_button">
          {{ t("WithdrawFunds") }}
        </button>
        <button type="button" class="blue_button">
          {{ t("ConnectWallet") }}
        </button>
      </div>
    </div>
    <div class="profile_block">
      <div class="profile">{{ t("Profile") }} <Icon icon="lucide:edit" /></div>
      <div class="profile_info">
        <div
          :style="{ backgroundImage: 'url(' + profileInfo.image + ')' }"
          alt=""
        ></div>
        <div class="profile_content">
          <p class="header">{{ profileInfo.name }}</p>
          <p class="description">
            {{ t("GuideDescription") }} {{ profileInfo.description }}
          </p>
          <p class="link">
            {{ profileInfo.link.name }}: {{ profileInfo.link.url }}
          </p>
        </div>
      </div>
    </div>
    <div class="guides_block">
      <p class="header">{{ t("MyGuides") }}</p>
      <div class="guides_list">
        <div class="guide" v-for="item in profileInfo.guides" :key="item">
          <div class="top_block">
            <img class="image" :src="item.image" />
            <p>
              <span class="dots">...</span
              ><span>{{ t("Guide") }} {{ item.name }}</span>
            </p>
          </div>
          <div class="bottom_block">
            <p class="stat">{{ t("Statistic") }}</p>
            <div class="info">
              <p class="">
                {{ t("EarnedTotal") }}: <span>{{ item.statistic.all }}</span>
              </p>
              <p class="">
                {{ t("EarnedPerWeek") }}:
                <span>{{ item.statistic.perWeek }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="referal_block">
      <div class="header">{{ t("Referals") }}</div>
      <p class="">
        <span>{{ t("ReferalLink") }}</span
        ><span class="blue"
          >{{ profileInfo.referal.link }}<Icon icon="basil:copy-outline"
        /></span>
      </p>
      <div class="referals_list">
        <div
          class="referal"
          v-for="item in profileInfo.referal.referals"
          :key="item"
        >
          <div class="">
            <img :src="item.image" alt="" />
            <span>{{ item.name }}</span>
          </div>
          <div class="">
            <span class="blue"
              ><Icon icon="simple-icons:ton" /> +{{ item.statPerWeek }}</span
            >
            {{ t("PerWeek") }}
          </div>
        </div>
      </div>
    </div>
    <div class="slide_menu" :class="{ slide: settings == true }">
      <p class="header">
        {{ t("Settings") }}
        <Icon icon="material-symbols:close" @click="settings = false" />
      </p>
      <div class="lang">
        <div class="text">
          <Icon icon="material-symbols-light:language" />{{ t("Language") }}
        </div>
        <select name="" id="" v-model="currLang">
          <option>Русский</option>
          <option>English</option>
        </select>
        <div class="theme">
          {{ t("DarkTheme") }}
          <div class="slider" @click="theme = !theme">
            <p :class="{ off: theme == false }"></p>
          </div>
        </div>
      </div>
      <div class="politic">
        <p class="">{{ t("PrivacyPolicy") }}</p>
        <p class="">{{ t("AllRightsReserved") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

const profileInfo = {
  image: "/profile.png",
  name: "Ксения Гладкова",
  description:
    "Преподаю химию и биологию, сюда пишу свои  короткие статьи и гайды",
  link: {
    name: "Мой телеграм",
    url: "https//t.me/ksustudy.com",
  },
  guides: [
    {
      name: "Создаем своего бота за час",
      image: "/icon.png",
      statistic: {
        all: 55,
        perWeek: 5,
      },
    },
    {
      name: "Создаем своего бота за час",
      image: "/icon.png",
      statistic: {
        all: 55,
        perWeek: 5,
      },
    },
    {
      name: "Создаем своего бота за час",
      image: "/icon.png",
      statistic: {
        all: 55,
        perWeek: 5,
      },
    },
  ],
  referal: {
    link: "4lr2324fu12a",
    referals: [
      { name: "Валерий Петров", image: "/profile.png", statPerWeek: 15 },
      { name: "Валерий Петров", image: "/profile.png", statPerWeek: 15 },
      { name: "Валерий Петров", image: "/profile.png", statPerWeek: 15 },
    ],
  },
};

const theme = localStorage.getItem("theme") == "dark" ? ref(true) : ref(false);
const currLang =
  localStorage.getItem("lang") == "English" ? ref("English") : ref("Русский");
const settings = ref(false);
const tg = window.Telegram.WebApp;

watch(currLang, () => {
  localStorage.setItem("lang", currLang.value);
  currLang.value == "Русский" ? (locale.value = "ru") : (locale.value = "en");
});

watch(theme, () => {
  const doc = document.documentElement;
  if (theme.value == true) {
    doc.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    tg.setHeaderColor("#0d0d0d");
    tg.setBackgroundColor("#2f2f2f");
    tg.backgroundColor = "#2f2f2f";
  } else {
    doc.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    tg.setHeaderColor("#fcfcfc");
    tg.setBackgroundColor("#fcfcfc");
    tg.backgroundColor = "#fcfcfc";
  }
});
</script>

<style lang="scss" scoped>
.content {
  overflow: hidden;
  .slide_menu {
    position: absolute;
    width: 80vw;
    height: 100%;
    background: var(--slide-menu-bg);
    top: 0;
    right: -80vw;
    transition: ease 0.5s;
    .politic {
      padding: 20px;
      p {
        padding: 10px 0;
        color: var(--text-gray);
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      padding: 40px 20px 20px 20px;
      align-items: center;
      font-size: 32px;
      color: var(--button-up-bg);
      border-bottom: 1px solid var(--border-gray);
    }
    .lang {
      padding: 27px 20px 20px 20px;
      border-bottom: 1px solid var(--border-gray);
      .text {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: var(--text-gray);
        svg {
          width: 24px;
          height: 24px;
          margin-right: 5px;
        }
      }
      select {
        margin: 10px 0 40px 0;
        padding: 10px 20px;
        width: 100%;
        background: var(--bg-slider);
        color: var(--text-gray);
        border: none;
        border-radius: 10px;
      }
      .theme {
        color: var(--text-gray);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .slider {
          display: flex;
          align-items: center;
          width: 50px;
          height: 25px;
          border-radius: 50px;
          background: var(--bg-slider);
          position: relative;
          p {
            transition: ease 0.5s;
            width: 23px;
            height: 23px;
            background-color: var(--button-up-bg);
            border-radius: 50%;
            position: absolute;
            right: 0;
          }
          .off {
            right: 55%;
          }
        }
      }
    }
  }
  .slide {
    right: 0;
  }
  position: relative;
  p {
    margin: 0;
  }
  .balance_block,
  .profile_block {
    padding: 10px 20px 15px 20px;
    border-bottom: 1px solid var(--border-gray);
  }
  .referal_block {
    padding: 10px 20px 15px 20px;
    color: var(--button-up-bg);
    .header {
      font-size: 26px;
      margin-bottom: 20px;
    }
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      .blue {
        display: flex;
        color: var(--active-footer);
        align-items: center;
        svg {
          margin: 0 0 5px 5px;
          width: 24px;
          height: 24px;
          rotate: (180deg);
        }
      }
    }
    .referals_list {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .referal {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        font-size: 14px;
        background: var(--bg-gray);
        margin-bottom: 10px;
        border-radius: 10px;
        div {
          display: flex;
          align-items: center;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .blue {
            display: flex;
            color: var(--active-footer);
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            margin-right: 10px;
            svg {
              width: 24px;
              height: 24px;
              rotate: (180deg);
              background: white;
              border-radius: 50%;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  .guides_block {
    padding: 10px 20px 15px 20px;
    .header {
      font-size: 26px;
      color: var(--button-up-bg);
      margin-bottom: 20px;
    }
    .guides_list {
      display: flex;
      overflow-x: scroll;
      scrollbar-width: none;
      .guide {
        min-width: 270px;
        background: var(--bg-gray);
        padding: 10px 0;
        margin-right: 20px;
        border-radius: 15px;
        .top_block {
          display: flex;
          margin-bottom: 10px;
          padding: 0 10px 15px 10px;
          border-bottom: 1px solid var(--border-gray);
          .image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
          p {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 12px;
            font-weight: 500;
            color: var(--button-up-bg);
            width: 80%;
            .dots {
              text-align: right;
              font-size: 16px;
              margin: 0px 10px 10px 0;
            }
          }
        }
        .bottom_block {
          display: flex;
          padding: 0 10px 0 10px;
          flex-direction: column;
          .stat {
            font-weight: 500;
            font-size: 14px;
            color: var(--button-up-bg);
          }
          .info {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            color: var(--text-gray);
            p span {
              color: var(--active-footer);
            }
          }
        }
      }
    }
  }
  .profile_info {
    display: flex;
    .profile_content {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 65%;
      p {
        margin: 0;
      }
      .header {
        color: var(--button-up-bg);
        margin: 0;
        font-size: 20px;
      }
      .description {
        font-size: 12px;
        color: var(--text-gray);
      }
      .link {
        font-size: 12px;
        color: var(--active-footer);
      }
    }
    div {
      margin-top: 10px;
      width: 100px;
      height: 100px;
      background-size: cover;
      border-radius: 50%;
      background-position: 50%;
    }
  }
  .profile_block {
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--button-up-bg);
      font-size: 16px;
      font-weight: 400;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
  .balance_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    color: var(--button-up-bg);
    svg {
      width: 24px;
      height: 24px;
    }
    p {
      display: flex;
      align-items: center;
      font-size: 30px;
      margin: 0;
      span {
        font-size: 24px;
        display: flex;
        margin-left: 20px;
        color: var(--active-footer);
        svg {
          background-color: white;
          border-radius: 50%;
          width: 27px;
          height: 27px;
          margin: 0 5px 2px 0;
        }
      }
    }
  }
  .balance_buttons {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .blue_button,
    .white_button {
      font-size: 14px;
      font-weight: 700;
      border-radius: 10px;
      border: none;
      padding: 10px 0;
    }
    .blue_button {
      color: var(--button-up-bg);
      width: 53%;
      background: var(--active-footer);
    }
    .white_button {
      background: var(--button-up-bg);
      width: 45%;
      color: var(--text-black);
    }
  }
}
</style>
