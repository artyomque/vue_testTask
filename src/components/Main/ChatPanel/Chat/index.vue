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
@import "@/assets/scss/base/vars";

.chat__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat {
  &__body {
    background-color: #ebebeb;
    border-radius: 20px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    max-height: 586px;

    @include mobile() {
      margin: 0 -15px;
      border-radius: 0;
      padding-top: 30px;
      padding-bottom: 30px;
      box-shadow: none;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  &__image {
    width: 190px;
    height: auto;

    @include mobile-xs() {
      width: 130px;
      height: 130px;
    }
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 0 174px;

    @include mobile() {
      font-size: 14px;
      padding: 0 52px;
    }
  }

  &__messages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    margin-bottom: 20px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b5b5b5;
      border-radius: 20px;
    }
  }

  &__date {
    display: block;
    font-size: 15px;
    color: $font-secondary;
    text-align: center;
  }

  &__actions {
    display: flex;
    padding-left: 20px;
    gap: 12px;
    margin-bottom: 20px;
    margin-top: auto;

    @include mobile() {
      flex-direction: column;
      align-items: flex-end;
      padding-left: 0px;
      padding-right: 20px;
    }
  }

  &__btn {
    color: #fff;
    background-color: $pink-main;
    padding: 12px 22px;
    border-radius: 21px;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 0.2s ease-in;

    @include mobile() {
      font-size: 14px;
    }

    &:hover {
      background-color: #ce00a2;
    }

    &--blue {
      background-color: #2676ee;
      &:hover {
        background-color: #005eea;
      }
    }
  }

  &__input {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border: 2px solid #ebebeb;
    border-radius: 20px;
    padding: 25px 20px 20px;
    height: 144px;
    transition: border-color 0.3s ease;

    @include mobile() {
      margin: 0 20px;
    }

    &:focus-within {
      border-color: $pink-main;
    }
  }

  &__textarea {
    width: 100%;
    height: 100%;
    max-height: 60px;
    max-width: 700px;
    resize: none;
    outline: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__input-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  &__attach {
    display: flex;
    gap: 20px;
  }

  &__attach-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  &__send-btn {
    position: relative;
    background-color: $pink-main;
    padding: 12px;
    border-radius: 50%;

    @include mobile() {
      top: 12px;
      left: 6px;
    }

    &::after {
      position: absolute;
      content: "Enter";
      font-size: 10px;
      top: 52px;
      right: 10px;

      @include mobile() {
        display: none;
      }
    }
  }
}
</style>
