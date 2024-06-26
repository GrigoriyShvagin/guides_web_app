<template>
  <div class="main-page_block">
    <div class="input_block">
      <input
        type="text"
        class="input_main"
        placeholder="Search Public Guides"
      />
      <Icon icon="material-symbols:search" />
    </div>
    <div class="block_info">
      <div class="info_list">
        <p
          class=""
          @click="currentInfo = 'Top Picks'"
          :class="{ activeInfo: currentInfo == 'Top Picks' }"
        >
          Top Picks
        </p>
        <p
          class=""
          @click="currentInfo = 'My GPTs'"
          :class="{ activeInfo: currentInfo == 'My GPTs' }"
        >
          My GPTs
        </p>
        <p
          class=""
          @click="currentInfo = 'Featured'"
          :class="{ activeInfo: currentInfo == 'Featured' }"
        >
          Featured
        </p>
        <p
          class=""
          @click="currentInfo = 'Trand'"
          :class="{ activeInfo: currentInfo == 'Trand' }"
        >
          Trand
        </p>
      </div>
    </div>
    <div class="featured_block">
      <div class="featured_content">
        <h3>Featured</h3>
        <p class="header_discr">Curated top picks from this week</p>
        <div class="curr_item">
          <img src="/icon.png" alt="" />
          <div class="item_text">
            <div class="text_header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
              quam voluptas eveniet ut impedit beatae qui quo voluptates enim
              unde architecto ab laboriosam tenetur reprehenderit maxime ipsam,
              optio quae.
            </div>
            <div class="text_content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              minus, illo numquam nulla debitis amet suscipit consequuntur
              excepturi accusantium doloribus assumenda cum perspiciatis sequi
              consectetur non rerum eum voluptatum architecto.
            </div>
            <a href="https://telegram.com">telegram.com</a>
          </div>
        </div>
        <div class="curr_item">
          <img src="/icon.png" alt="" />
          <div class="item_text">
            <div class="text_header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
              quam voluptas eveniet ut impedit beatae qui quo voluptates enim
              unde architecto ab laboriosam tenetur reprehenderit maxime ipsam,
              optio quae.
            </div>
            <div class="text_content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              minus, illo numquam nulla debitis amet suscipit consequuntur
              excepturi accusantium doloribus assumenda cum perspiciatis sequi
              consectetur non rerum eum voluptatum architecto.
            </div>
            <a href="https://telegram.com">telegram.com</a>
          </div>
        </div>
        <div class="curr_item">
          <img src="/icon.png" alt="" />
          <div class="item_text">
            <div class="text_header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
              quam voluptas eveniet ut impedit beatae qui quo voluptates enim
              unde architecto ab laboriosam tenetur reprehenderit maxime ipsam,
              optio quae.
            </div>
            <div class="text_content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              minus, illo numquam nulla debitis amet suscipit consequuntur
              excepturi accusantium doloribus assumenda cum perspiciatis sequi
              consectetur non rerum eum voluptatum architecto.
            </div>
            <a href="https://telegram.com">telegram.com</a>
          </div>
        </div>
        <div class="curr_item">
          <img src="/icon.png" alt="" />
          <div class="item_text">
            <div class="text_header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
              quam voluptas eveniet ut impedit beatae qui quo voluptates enim
              unde architecto ab laboriosam tenetur reprehenderit maxime ipsam,
              optio quae.
            </div>
            <div class="text_content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              minus, illo numquam nulla debitis amet suscipit consequuntur
              excepturi accusantium doloribus assumenda cum perspiciatis sequi
              consectetur non rerum eum voluptatum architecto.
            </div>
            <a href="https://telegram.com">telegram.com</a>
          </div>
        </div>
        <div class="curr_item">
          <img src="/icon.png" alt="" />
          <div class="item_text">
            <div class="text_header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse
              quam voluptas eveniet ut impedit beatae qui quo voluptates enim
              unde architecto ab laboriosam tenetur reprehenderit maxime ipsam,
              optio quae.
            </div>
            <div class="text_content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              minus, illo numquam nulla debitis amet suscipit consequuntur
              excepturi accusantium doloribus assumenda cum perspiciatis sequi
              consectetur non rerum eum voluptatum architecto.
            </div>
            <a href="https://telegram.com">telegram.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const currentInfo = ref("Top Picks");
</script>

<style lang="scss" scoped>
* {
  margin: 0;
}
.curr_item {
  background: #313131;
  padding: 10px;
  border-radius: 10px;
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
  margin-bottom: 100px;
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
    background: #606060;
    text-align: center;
    padding: 7px 10px;
    margin-right: 10px;
    border-radius: 10px;
    font-weight: 500;
    color: #fff;
  }
  .activeInfo {
    background: #fff;
    color: #000;
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
    color: #adadad;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 7%;
    top: 10%;
  }
}
.input_main {
  outline: none;
  background: #606060;
  width: 80%;
  margin: 0 20px;
  border: none;
  border-radius: 10px;
  color: #adadad;
  padding: 10px 20px 10px 50px;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: #adadad;
}
</style>
