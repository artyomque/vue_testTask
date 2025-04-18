<script lang="ts" setup>
import ItemList from "@/components/Main/FilesPanel/ItemList/index.vue";
import { useScreenSize } from "@/plugins/useScreenSize";

const files = [
  { name: `Company Name 11/23`, available: false },
  { name: `Company Name 10/23`, available: true },
  { name: `Company Name 9/23`, available: true },
  { name: `Company Name 8/23`, available: true },
  { name: `Company Name 7/23`, available: true },
  { name: `Company Name 6/23`, available: true },
];

const { isMobile } = useScreenSize(600);
</script>

<template>
  <div v-if="!isMobile" class="files">
    <h2 class="files__title">Файлы</h2>
    <div v-if="!files.length" class="files__body">
      <img class="files__img" src="/images/folder.png" />
      <span class="files__text"
        >Закажи у личного помощника медиаплан. Он появится в этом разделе</span
      >
    </div>
    <div class="files__body">
      <ItemList :category-name="`Медиапланы`" :items="files" :visible-count="4" />
      <ItemList :category-name="`Отчеты`" :items="files" :visible-count="4" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";
.files {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
  gap: 46px;
  padding: 28px 0;
  max-height: 705px;

  @include mobile() {
    box-shadow: none;
  }

  &__title {
    padding-left: 20px;
    font-size: 24px;
    font-weight: 600;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b5b5b5;
      border-radius: 20px;
    }

    @include mobile-sm {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @include sm-lg() {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__text {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }

  &__img {
    max-height: 314px;
    max-width: 255px;

    @include mobile() {
      height: 304px;
      width: 248px;
    }
  }
}
</style>
