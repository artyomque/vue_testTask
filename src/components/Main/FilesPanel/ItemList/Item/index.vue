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
.list__item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding-left: 9px;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  &__name {
    font-size: 15px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4d4ed;
    padding: 8px;
    border-radius: 4px;
    border: none;

    &--pending {
      background-color: #949494;
      cursor: default;
    }
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 5px;

    &__text {
      font-size: 12px;
      color: #525252;
    }
  }
}
</style>
