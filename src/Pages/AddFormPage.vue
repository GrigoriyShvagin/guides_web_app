<template>
  <div class="content" @click="changeBlur($event)">
    <form
      class="input_form"
      v-if="currCon == 'MainPage'"
      @submit.prevent="setGuideInfo"
    >
      <div class="header">Создание гайда</div>
      <p class="text_img">Фото гайда</p>
      <div class="form_block">
        <div
          class="imageInputForm"
          ref="imageInput"
          @click="image.click()"
          :style="{ backgroundImage: url ? 'url(' + url + ')' : 'none' }"
        >
          <Icon icon="mynaui:image" class="center_icon" v-if="!url" />
          <input
            type="file"
            class="image_input"
            @input="onFileChange"
            id="image_input"
            ref="image"
            hidden
          />
          <Icon icon="octicon:feed-plus-16" class="plusIcon" />
        </div>
        <Icon
          icon="pepicons-pop:trash"
          class="deleteIcon"
          v-if="url"
          @click="url = null"
        />
      </div>
      <p class="name_input">
        Название <span>{{ guide.name.length }} / 20</span>
      </p>
      <input type="text" maxlength="20" v-model="guide.name" required />
      <p class="name_input">
        Описание <span>{{ guide.description.length }} / 40</span>
      </p>
      <textarea
        type="text"
        maxlength="40"
        v-model="guide.description"
        required
      />
      <p class="name_input">
        Цена <span><Icon icon="simple-icons:ton" /></span>
      </p>
      <input type="number" v-model="guide.price" required />
      <p class="name_input">
        Категории <span>{{ guide.categories.length }} / 3</span>
      </p>
      <div class="categories_input">
        <input maxlength="15" v-model="currCategory" />
        <Icon
          icon="solar:map-arrow-right-bold"
          @click="setCategory(currCategory)"
        />
        <p class="categories_list">
          <span v-for="category in guide.categories" :key="category">{{
            category
          }}</span>
        </p>
      </div>
      <div class="button_block">
        <button type="submit" @click="changeBlur">Далее</button>
      </div>
    </form>
    <form
      class="input_form"
      v-if="currCon == 'ChapterPage'"
      @submit.prevent="setChapter"
    >
      <div class="header">Глава {{ guide.chaptersList?.length + 1 }}</div>
      <p class="name_input">
        Название главы <span>{{ chapter.name.length }} / 15</span>
      </p>
      <input type="text" v-model="chapter.name" maxlength="15" required />

      <p class="name_input">Видео</p>
      <div
        class="videoInput_block"
        ref="videoInputBLock"
        @click="$refs.inputVideo.click()"
      >
        <div class="video_text_content" v-if="!chapter.video">
          Загрузите видео (до 20мб, mp4, avi)
          <Icon icon="solar:download-outline" />
        </div>
        <div class="video_text_content" v-else>{{ chapter.video.name }}</div>
      </div>
      <input
        type="file"
        ref="inputVideo"
        id="inputVideo"
        hidden
        @input="setInputVideo"
      />

      <p class="name_input">Фото</p>
      <div
        class="videoInput_block Photo_block"
        ref="photoInputBLock"
        @click="$refs.inputPhoto.click()"
      >
        <div class="photo_text_content" v-if="!chapter.image">
          Загрузите фото (до 20мб jpeg,png)
          <Icon icon="solar:download-outline" />
        </div>
        <div class="photo_text_content" v-else>{{ chapter.image.name }}</div>
      </div>
      <input
        type="file"
        ref="inputPhoto"
        id="inputPhoto"
        @input="setInputImage"
        hidden
      />
      <p class="name_input">
        Описание <span>{{ chapter.description?.length }} / 80</span>
      </p>
      <textarea type="text" maxlength="80" v-model="chapter.description" />
      <div class="buttons_block">
        <button type="button" @click="currCon = 'MainPage'">Назад</button
        ><button type="submit">Добавить главу</button>
      </div>
      <button type="button" class="endButton">Завершить</button>
    </form>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

let tg = window.Telegram.WebApp;

const guide = ref({
  name: "",
  author: tg.initDataUnsafe.user?.id,
  image: null,
  description: "",
  price: "",
  categories: [],
  chaptersList: [],
});

let currCategory = ref("");
const bites = 167772160 / 8;
let image = ref(null);
let url = ref("");
let currCon = ref("MainPage");
let imageInput = ref(); //mainPage
let inputVideo = ref(null);
let inputPhoto = ref(null); //chapterPage

let chapter = ref({ name: "", video: null, image: null, description: "" });

let videoInputBLock = ref();
let photoInputBLock = ref();

function zeroiz() {
  chapter.value = { name: "", video: null, image: null, description: "" };
  [inputPhoto.value.value, inputVideo.value.value] = [null, null];
}

function onFileChange() {
  const file = image.value.files[0];
  guide.value.image = file;
  url.value = file ? URL.createObjectURL(file) : null;
}

function setChapter() {
  guide.value.chaptersList.push(chapter.value);
  zeroiz();
}

function setInputVideo() {
  const classList = videoInputBLock.value.classList;
  classList.remove("redColor");

  const file = inputVideo.value.files[0];
  const isVideo = file.type == "video/mp4" || file.type == "video/avi";
  const isSizeSmall = file.size < bites;
  chapter.value.video =
    isVideo && isSizeSmall ? file : classList.add("redColor");
}

function setInputImage() {
  const classList = photoInputBLock.value.classList;
  classList.remove("redColor");

  const file = inputPhoto.value.files[0];
  const isPhoto = file.type == "image/png" || file.type == "image/jpeg";
  const isSizeSmall = file.size < bites / 10;
  chapter.value.image =
    isPhoto && isSizeSmall ? file : classList.add("redColor");
}

function changeBlur(e) {
  if (!e.target.localName == "textarea" || !e.target.localName == "input") {
    document.activeElement.blur();
  }
}

function setCategory(text) {
  guide.value.categories?.length < 3 && text
    ? guide.value.categories.push(text)
    : false;
  currCategory = "";
}

function setGuideInfo() {
  !image.value.files[0]
    ? imageInput.value.classList.add("red")
    : (currCon.value = "ChapterPage");
}
</script>

<style lang="scss" scoped>
.endButton {
  margin-top: 10px;
  width: 100%;
  background: var(--active-footer);
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  color: var(--text-white);
}
.buttons_block {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
    background: var(--button-up-bg);
    color: var(--text-black);
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
  }
}
.input_form {
  width: 100%;
  input,
  textarea,
  select {
    width: 98%;
    background: var(--button-up-color);
    outline: none;
    border-radius: 15px;
    color: var(--text-white);
    border: none;
  }
  input {
    padding: 10px 0 10px 10px;
  }
  textarea {
    padding: 20px 0 20px 10px;
  }
  select {
    width: 100%;
    padding: 10px 10px 10px 10px;
    option {
      color: white;
    }
  }
  .categories_input {
    position: relative;
    svg {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  .categories_list {
    margin-left: 10px;
    font-size: 10px;
    span {
      margin-right: 5px;
      padding: 2px 5px;
      background: var(--button-up-color);
      border-radius: 5px;
    }
  }
  .button_block {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 20px;
    button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 10px;
      background: var(--button-up-bg);
      color: var(--text-black);
      font-weight: 700;
    }
  }
  .videoInput_block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--text-gray);
    padding: 30px;
    font-size: 14px;
    border-radius: 20px;
    background: var(--button-up-color);
    .video_text_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 24px;
      height: 24px;
      margin-top: 10px;
      color: var(--button-up-bg);
    }
  }
  .Photo_block {
    flex-direction: row;
    justify-content: space-between;
    .photo_text_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    padding: 15px 40px;
    svg {
      width: 16px;
      height: 16px;
      margin: 0 0 0 10px;
    }
  }
}
.form_block {
  position: relative;
  .deleteIcon {
    position: absolute;
    top: 72px;
    left: 115px;
    width: 24px;
    height: 24px;
  }
}
.name_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--text-gray);
  svg {
    color: #08c;
    background: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
}
.content {
  padding: 20px;
  margin-bottom: 200px;
  color: var(--button-up-bg);
  .header {
    margin: 20px 0;
    font-size: 32px;
    font-weight: 700;
  }
  .text_img {
    color: var(--text-gray);
    font-size: 14px;
    margin-bottom: 20px;
  }
}
.imageInputForm {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--button-up-bg);
  background-size: cover;
  background-position: 50%;
  position: relative;
  .center_icon {
    position: absolute;
    top: 35%;
    left: 35%;
    width: 30px;
    height: 30px;
  }
  .plusIcon {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 75%;
    bottom: 5%;
  }
}
.preview {
  img {
    max-width: 100%;
    max-height: 500px;
  }
}
.redColor {
  color: red !important;
  svg {
    color: red !important;
  }
}
.red {
  border-color: red;
  svg {
    color: red;
  }
}
</style>
