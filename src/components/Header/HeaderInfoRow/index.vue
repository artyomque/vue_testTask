<script lang="ts" setup>
type Props = {
  icon: string;
  text: string;
  onClick?: () => void;
};

defineProps<Props>();
</script>

<template>
  <div class="header-info-row" @click="onClick">
    <img :src="icon" alt="" class="header-info-row__icon" />
    <span class="header-info-row__text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
