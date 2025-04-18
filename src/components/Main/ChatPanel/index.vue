<script setup lang="ts">
import { ref, reactive } from "vue";
import { useScreenSize } from "@/plugins/useScreenSize";
import Chat from "@/components/Main/ChatPanel/Chat/index.vue";
import Dropdown from "@/components/Main/ChatPanel/Dropdown/index.vue";

const userName = ref("Jim Davidson");
const userEmail = ref("Jim.Davidson@adaurum.ru");
const { isMobile } = useScreenSize();

const isDropdownOpen = ref(false);

const options = [
  { value: "feedback", label: "Обратная связь о работе сервиса", onSelect: () => {} },
  { value: "change_assistant", label: "Сменить помощника", onSelect: () => {} },
];

const toggleMenu = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
  <div v-if="isMobile" class="chat">
    <div class="chat__header">
      <h2 class="chat__header__title">Личный помощник</h2>
      <button @click="toggleMenu()" class="chat__header__btn">
        <img class="header__btn__img" src="/icons/dots.svg" alt="menu" />
      </button>
      <Dropdown v-if="isDropdownOpen" :options @close="isDropdownOpen = false" />
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
        <button @click="toggleMenu()" class="chat__header__btn">
          <img class="header__btn__img" src="/icons/dots.svg" alt="menu" />
        </button>
        <Dropdown v-if="isDropdownOpen" :options @close="isDropdownOpen = false" />
      </div>
    </div>

    <Chat />
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
