<template>
  <div class="content">
    <img src="/constructor.jpeg" alt="" />
    <div class="text_content">
      <p class="header">Создать гайд</p>
      <span
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat odio
        ut beatae assumenda fugiat tempore in amet repellendus nihil veniam?
        Quam voluptatum eligendi magni nulla excepturi eum, saepe repellat
        laudantium.</span
      >
    </div>
    <div class="button_block">
      <a href="/add_form"><Icon icon="simple-line-icons:plus" />Создать гайд</a>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.content {
  color: var(--text-white);
  p {
    margin: 0;
  }
  width: 100vw;
  img {
    height: 300px;
    width: 100vw;
  }
  .text_content {
    padding: 0 20px;

    .header {
      margin: 10px 0;
      font-size: 32px;
    }
  }
  .button_block {
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      margin-top: 50px;
      border-radius: 10px;
      font-weight: 700;
      width: fit-content;
      display: flex;
      padding: 10px 20px;
      align-items: center;
      background: var(--button-up-bg);
      color: var(--text-black);
      svg {
        margin-right: 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
