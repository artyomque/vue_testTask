import { nextTick } from "vue";

export default async function scrollToBottom(element) {
  await nextTick();
  const container = element.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}
