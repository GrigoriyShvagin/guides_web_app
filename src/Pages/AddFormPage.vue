<template>
  <div class="content">
    <div class="header">Создание гайда</div>
    <form
      class="input_form"
      v-if="currCon == 'MainPage'"
      @submit.prevent="setGuideInfo"
    >
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
        <button type="submit">Далее</button>
      </div>
    </form>
    <form v-if="currCon == 'ChapterPage'">
      <button type="submit" @submit.prevent="console.log(guide)"></button>
    </form>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const guide = ref({
  name: "",
  image: null,
  description: "",
  price: "",
  categories: [],
  chaptersList: [],
});

let currCategory = ref("");
let image = ref(null);
let url = ref("");
let currCon = ref("MainPage");
let imageInput = ref();

function onFileChange() {
  const file = image.value.files[0];
  guide.value.image = image.value.files[0];
  url.value = file ? URL.createObjectURL(file) : null;
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
.input_form {
  width: 100%;
  input,
  textarea,
  select {
    width: 98%;
    background: var(--button-up-color);
    outline: none;
    border-radius: 15px;
    color: white;
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
.red {
  border-color: red;
  svg {
    color: red;
  }
}
</style>
