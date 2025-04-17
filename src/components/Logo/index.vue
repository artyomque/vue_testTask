<script lang="ts" setup>
type Props = {
  type: "header" | "footer";
};

defineProps<Props>();
</script>

<template>
  <img v-if="type === `header`" src="/Logo/Logo_header.svg" />
  <img v-if="type === `footer`" src="/Logo/Logo_footer.svg" />
</template>
