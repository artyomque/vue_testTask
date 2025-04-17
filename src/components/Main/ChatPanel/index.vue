<script setup lang="ts">
import { ref, reactive } from "vue";
import formatDate from "@/utils/formatDate";

const userName = "Jim Davidson";
const userEmail = "Jim.Davidson@adaurum.ru";

const newMessage = ref("");
const messages = ref([{ sender: "Jim", text: "Test", time: new Date() }]);

const sendMessage = () => {
  if (!newMessage.value.trim()) return;

  messages.value.push({
    sender: "я",
    text: newMessage.value,
    time: new Date(),
  });

  newMessage.value = "";
};
</script>

<template>
  <div class="chat">
    <div class="chat__header">
      <h2 class="chat__header__title">Личный помощник</h2>
      <div class="chat__header__rest">
        <div class="chat__header__user">
          <span class="header__username">{{ userName }}</span>
          <span class="header__email">{{ userEmail }}</span>
        </div>
        <button class="chat__header__btn">
          <img class="header__btn__img" src="/icons/dots.svg" alt="menu" />
        </button>
      </div>
    </div>

    <div class="chat__body">
      <div v-if="!messages.length" class="chat__body__info">
        <img src="/images/chat_img.png" alt="chat_img" class="body__img" />
        <p class="body__text">
          Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и
          узнать о ходе работы
        </p>
      </div>

      <div v-else class="chat__messages">
        <span class="date"
          ><!-- {{ formatDate(messages[0].time) }} -->
          17 april 23:25</span
        >
        <div class="message message--user">
          <p class="message__text">
            Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol
            innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.
          </p>
          <span class="message__time">23:25</span>
        </div>
      </div>

      <div class="body__actions">
        <button class="body__btn">Заказать медиаплан</button>
        <button class="body__btn body__btn--blue">Заказать отчет</button>
      </div>

      <div class="chat__input">
        <textarea
          v-model="newMessage"
          placeholder="Введите сообщение для администратора"
          class="chat__input__textarea"
        />
        <div class="chat__input__controls">
          <div class="chat__input__attach">
            <button class="chat__input__attach-btn">
              <img src="/icons/attach.svg" alt="attach" />
            </button>
            <button class="chat__input__attach-btn">
              <img src="/icons/attach_img.svg" alt="send" />
            </button>
          </div>
          <button class="chat__input__send-btn" @click="sendMessage">
            <img src="/icons/send.svg" alt="send" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.chat {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
  padding: 28px;
  height: 705px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;

    &__rest {
      display: flex;
      gap: 26px;
    }

    &__title {
      font-size: 24px;
      font-weight: 600;
    }
    &__user {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    &__btn {
      background-color: #f5f5f5;
      padding: 7px 18px;
      border-radius: 50%;
    }
  }

  &__body {
    background-color: #ebebeb;
    border-radius: 20px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    height: 100%;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 55px;
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

    &:focus-within {
      border-color: $pink-main;
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

    &__attach {
      display: flex;
      gap: 20px;
    }

    &__controls {
    }

    &__send-btn {
      position: absolute;
      right: 20px;
      bottom: 28px;
      background-color: $pink-main;
      padding: 12px;
      border-radius: 50%;

      &::after {
        position: absolute;
        content: "Enter";
        font-size: 10px;
        top: 52px;
        right: 10px;
      }
    }
  }
}

.body {
  &__text {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 0 174px;
  }

  &__actions {
    display: flex;
    padding-left: 20px;
    gap: 12px;
    margin-bottom: 20px;
    margin-top: auto;
  }

  &__btn {
    color: #fff;
    background-color: $pink-main;
    padding: 12px 22px;
    border-radius: 21px;
    font-size: 16px;
    font-weight: 600;

    &--blue {
      background-color: #2676ee;
    }
  }
}

.header {
  &__username {
    font-size: 15px;
    font-weight: 600;
  }

  &__email {
    font-size: 15px;
    color: #525252;
  }

  &__btn__img {
    width: 100%;
    height: 100%;
  }
}

.date {
  display: block;
  font-size: 15px;
  color: $font-secondary;
  text-align: center;
}

.message {
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 454px;
  gap: 8px;

  &__text {
    background-color: #fff;
    border-radius: 12px;
    padding: 16px 22px;
    font-size: 16px;
    font-weight: 500;
  }

  &__time {
    text-align: end;
  }
}
</style>
