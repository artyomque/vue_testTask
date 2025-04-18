<script lang="ts" setup>
import Item from "@/components/Main/FilesPanel/ItemList/Item/index.vue";
import { ref, computed } from "vue";

type Props = {
  categoryName: string;
  items: { name: string; available: boolean }[];
  visibleCount: number;
  mobileVersion?: boolean;
};

const visibleItems = computed(() => props.items.slice(0, props.visibleCount));

const showAll = ref(false);

const showItems = ref(true);

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

const toggleShowItems = () => {
  showItems.value = !showItems.value;
};

const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="category__header">
      <h3 class="category__name">{{ categoryName }}</h3>
      <button v-if="!mobileVersion" @click="toggleShowItems()" class="category__btn">
        <img v-if="showItems" src="/icons/arrow-up.svg" />
        <img v-else style="transform: scaleY(-1)" src="/icons/arrow-up.svg" />
      </button>
    </div>

    <div class="list__wrapper" v-if="showItems">
      <ul v-if="showAll" class="list">
        <Item
          v-for="(item, index) in items"
          :key="index"
          :item-name="item.name"
          :available="item.available"
          :category-name="categoryName"
        />
      </ul>
      <ul v-else class="list">
        <Item
          v-for="(item, index) in visibleItems"
          :key="index"
          :item-name="item.name"
          :available="item.available"
          :category-name="categoryName"
        />
      </ul>
      <button class="list__btn" v-if="props.items.length > 4" @click="toggleShowAll()">
        {{ showAll ? "Скрыть" : "Показать еще" }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
