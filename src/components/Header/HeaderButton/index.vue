<script setup lang="ts">
type Props = {
  icon: string;
  onClick?: () => void;
};

defineProps<Props>();
</script>

<template>
  <button class="header-button" @click="onClick">
    <img :src="icon" alt="" class="header-button__icon" />
  </button>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
