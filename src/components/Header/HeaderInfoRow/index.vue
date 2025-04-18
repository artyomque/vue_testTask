<script lang="ts" setup>
import { useScreenSize } from "@/plugins/useScreenSize";

const { isMobile } = useScreenSize();

type Props = {
  icon: string;
  text: string;
  onClick?: () => void;
  type: string;
};

defineProps<Props>();
</script>

<template>
  <div class="info-row" @click="onClick">
    <img :src="icon" alt="" class="info-row__icon" />
    <span v-if="type === 'user'" class="info-row__text info-row__text--user">{{ text }}</span>
    <span v-if="type === 'rate' && !isMobile" class="info-row__text">{{ text }}</span>
    <span v-if="type === 'rate' && isMobile" class="info-row__text info-row__text--rate"
      >{{ text }} выручки</span
    >
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
