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
        <img class="chat__message-avatar" :src="message.avatar" />
        <div class="chat__message-body">
          <p class="chat__message-text">{{ message.text }}</p>
          <div class="chat__message-meta">
            <span class="chat__message-sender">{{ message.sender }}</span>
            <span class="chat__message-time--admin">{{ formatDate(message.time, "time") }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
