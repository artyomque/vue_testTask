<script lang="ts" setup>
type Props = {
  itemName: string;
  available: boolean;
  categoryName: string;
};

defineProps<Props>();
</script>

<template>
  <li class="list__item">
    <div class="item">
      <div class="item__wrapper">
        <img class="item__icon" src="/icons/xml.svg" />
        <span class="item__name">{{ itemName }}</span>
      </div>
      <button v-if="available" class="item__button item__button--available">
        <img src="/icons/download.svg" />
      </button>
      <button v-else disabled class="item__button item__button--pending">
        <img src="/icons/pending.svg" />
      </button>
    </div>
    <div v-if="!available" class="item__status">
      <img src="/icons/exclamation.svg" />
      <span v-if="categoryName === `Медиапланы`" class="item__status__text"
        >Медиаплан в процессе составления</span
      >
      <span v-if="categoryName === `Отчеты`" class="item__status__text">Отчет формируется</span>
    </div>
  </li>
</template>

<style lang="scss">
@import "./index.scss";
</style>
