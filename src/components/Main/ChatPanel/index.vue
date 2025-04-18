<script setup lang="ts">
import { ref, reactive } from "vue";
import { useScreenSize } from "@/plugins/useScreenSize";
import Chat from "@/components/Main/ChatPanel/Chat/index.vue";

const userName = ref("Jim Davidson");
const userEmail = ref("Jim.Davidson@adaurum.ru");
const { isMobile } = useScreenSize();
</script>

<template>
  <div v-if="isMobile" class="chat">
    <div class="chat__header">
      <h2 class="chat__header__title">Личный помощник</h2>
      <button class="chat__header__btn">
        <img class="header__btn__img" src="/icons/dots.svg" alt="menu" />
      </button>
    </div>
    <div class="chat__header__rest">
      <div class="chat__header__user">
        <span class="header__username">{{ userName }}</span>
        <span class="header__email">{{ userEmail }}</span>
      </div>
    </div>
    <Chat />
  </div>

  <div v-else class="chat">
    <div class="chat__header">
      <h2 class="chat__header__title">Личный помощник</h2>
      <div class="chat__header__rest">
        <div class="chat__header__user">
          <span class="header__username">{{ userName }}</span>
          <span class="header__email">{{ userEmail }}</span>
        </div>
        <button class="chat__header__btn">
          <img class="header__btn__img" src="/icons/dots.svg" alt="menu" />
        </button>
      </div>
    </div>

    <Chat />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.chat {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
  padding: 28px;
  height: 705px;

  @include mobile() {
    gap: 20px;
    box-shadow: none;
    padding: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;

    @include mobile() {
      margin-bottom: 0;
    }

    &__rest {
      display: flex;
      justify-content: space-between;
      gap: 26px;
    }

    &__title {
      font-size: 24px;
      font-weight: 600;

      @include mobile() {
        font-size: 20px;
      }
    }
    &__user {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    &__btn {
      background-color: #f5f5f5;
      padding: 7px 18px;
      border-radius: 50%;
    }
  }
}

.header {
  &__username {
    font-size: 15px;
    font-weight: 600;
  }

  &__email {
    font-size: 15px;
    color: #525252;
  }

  &__btn__img {
    width: 100%;
    height: 100%;
  }
}
</style>
