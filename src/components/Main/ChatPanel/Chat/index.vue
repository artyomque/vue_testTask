<script lang="ts" setup>
import { ref, watch } from "vue";
import Message from "@/components/Main/ChatPanel/Chat/Message/index.vue";
import formatDate from "@/utils/formatDate";
import scrollToBottom from "@/utils/scrollToBottom";

const messagesRef = ref(null);

const newMessage = ref("");

const messages = ref([]);

const sendMessage = async (messageContent?: string) => {
  if (!newMessage.value.trim() && !messageContent) return;

  messages.value.push({
    sender: "я",
    text: messageContent || newMessage.value,
    time: new Date(),
    avatar: "",
  });

  newMessage.value = "";

  setTimeout(() => {
    messages.value.push({
      sender: "Jim",
      text: "Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.",
      time: new Date(),
      avatar: "/images/admin_avatar.png",
    });
  }, 2000);
};

watch(messages.value, async () => {
  await scrollToBottom(messagesRef);
});
</script>

<template>
  <div class="chat__wrapper">
    <div class="chat__body">
      <div v-if="!messages.length" class="chat__info">
        <img src="/images/chat_img.png" alt="chat_img" class="chat__image" />
        <p class="chat__text">
          Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и
          узнать о ходе работы
        </p>
      </div>

      <div v-else class="chat__messages" ref="messagesRef">
        <span class="chat__date">{{ formatDate(messages[0].time, "fullDate") }}</span>
        <Message v-for="(msg, index) in messages" :key="index" :message="msg" />
      </div>

      <div class="chat__actions">
        <button class="chat__btn" @click="sendMessage('Хочу чтобы вы сделали для меня медиаплан.')">
          Заказать медиаплан
        </button>
        <button
          class="chat__btn chat__btn--blue"
          @click="sendMessage('Хочу чтобы вы сделали для меня отчет.')"
        >
          Заказать отчет
        </button>
      </div>

      <div class="chat__input">
        <textarea
          v-model="newMessage"
          @keydown.enter="sendMessage()"
          placeholder="Введите сообщение для администратора"
          class="chat__textarea"
        />
        <div class="chat__input-footer">
          <div class="chat__attach">
            <button class="chat__attach-btn">
              <img src="/icons/attach.svg" alt="attach" />
            </button>
            <button class="chat__attach-btn">
              <img src="/icons/attach_img.svg" alt="image" />
            </button>
          </div>
          <button class="chat__send-btn" @click="sendMessage()">
            <img src="/icons/send.svg" alt="send" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
