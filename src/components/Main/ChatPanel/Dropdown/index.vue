<script lang="ts" setup>
type Option = {
  value: string;
  label: string;
  onSelect: () => void;
};

interface Props {
  options: Option[];
}

defineProps<Props>();
const emit = defineEmits(["close"]);

const handleClick = (option: Option) => {
  option.onSelect();
  emit("close");
};
</script>

<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li
        v-for="option in options"
        :key="option.value"
        @click="handleClick(option)"
        class="dropdown__item"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.dropdown {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
  padding: 16px 30px;
  top: 44px;
  right: 0;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.dropdown__item {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.dropdown__item:hover {
  color: $pink-main;
}
</style>
