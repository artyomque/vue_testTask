<script lang="ts" setup>
import { defineProps } from "vue";
import formatDate from "@/utils/formatDate";

type Message = {
  sender: string;
  text: string;
  time: Date;
  avatar?: string;
};

defineProps<{
  message: Message;
}>();
</script>

<template>
  <div
    :class="[
      'chat__message',
      message.sender === 'я' ? 'chat__message--user' : 'chat__message--admin',
    ]"
  >
    <template v-if="message.sender === 'я'">
      <p class="chat__message-text">{{ message.text }}</p>
      <span class="chat__message-time">{{ formatDate(message.time, "time") }}</span>
    </template>

    <template v-else>
      <div class="chat__message-wrapper">
        <img class="chat__avatar" :src="message.avatar" />
        <div class="chat__message-body">
          <p class="chat__message-text">{{ message.text }}</p>
          <div class="chat__meta">
            <span class="chat__sender">{{ message.sender }}</span>
            <span class="chat__message-time--admin">{{ formatDate(message.time, "time") }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.chat__message {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chat__message--admin {
  align-self: flex-start;
  padding-left: 20px;
}

.chat__message--user {
  align-self: flex-end;
  padding-right: 26px;
}

.chat__message-wrapper {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.chat__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;

  @include mobile() {
    width: 36px;
    height: 36px;
  }
}

.chat__message-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chat__message-text {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px 22px;
  font-size: 16px;
  font-weight: 500;
  max-width: 541px;

  @include mobile() {
    max-width: 300px;
  }
}

.chat__message-time {
  text-align: end;
}

.chat__sender {
  font-size: 18px;
  font-weight: 600;
}

.chat__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
