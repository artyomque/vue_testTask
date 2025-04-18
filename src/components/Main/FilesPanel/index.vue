<script lang="ts" setup>
import { ref, provide } from "vue";
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

const mediaplansAreOpen = ref(false);
const reportsAreOpen = ref(false);
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

  <div class="mobile" v-else>
    <div class="mobile__buttons">
      <button
        @click="mediaplansAreOpen = !mediaplansAreOpen"
        :class="['mobile__btn', { 'mobile__btn--active': mediaplansAreOpen }]"
      >
        Медиапланы
      </button>
      <button
        @click="reportsAreOpen = !reportsAreOpen"
        :class="['mobile__btn', { 'mobile__btn--active': reportsAreOpen }]"
      >
        Отчеты
      </button>
    </div>
    <ItemList
      v-if="mediaplansAreOpen"
      :category-name="`Медиапланы`"
      :items="files"
      :visible-count="4"
      :mobile-version="true"
    />
    <ItemList
      v-if="reportsAreOpen"
      :category-name="`Отчеты`"
      :items="files"
      :visible-count="4"
      :mobile-version="true"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
