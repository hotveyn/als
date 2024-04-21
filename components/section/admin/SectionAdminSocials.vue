<script setup lang="ts">
const vk = ref("");
const telegram = ref("");
const email = ref("");
const euro = ref("");
const toast = useToast();

onMounted(async () => {
  const socials = await $fetch("/api/socials/");
  vk.value = socials.vk!.value;
  telegram.value = socials.telegram!.value;
  email.value = socials.email!.value;
  euro.value = socials.euro!.value;
});

async function saveVk() {
  try {
    const res = await $fetch("/api/socials/vk", {
      method: "patch",
      body: {
        value: vk.value,
      },
    });
    toast.add({ title: "Изменено" });
  } catch (e) {
    console.error(e);
    toast.add({
      title: "Неизвестная ошибка",
      color: "red",
      icon: "i-material-symbols-error",
    });
  }
}
async function saveTelegram() {
  try {
    await $fetch("/api/socials/telegram", {
      method: "patch",
      body: {
        value: telegram.value,
      },
    });
    toast.add({ title: "Изменено" });
  } catch (e) {
    console.error(e);
    toast.add({
      title: "Неизвестная ошибка",
      color: "red",
      icon: "i-material-symbols-error",
    });
  }
}
async function saveEmail() {
  try {
    await $fetch("/api/socials/email", {
      method: "patch",
      body: {
        value: email.value,
      },
    });
    toast.add({ title: "Изменено" });
  } catch (e) {
    console.error(e);
    toast.add({
      title: "Неизвестная ошибка",
      color: "red",
      icon: "i-material-symbols-error",
    });
  }
}
async function saveEuro() {
  try {
    await $fetch("/api/socials/euro", {
      method: "patch",
      body: {
        value: String(euro.value),
      },
    });
    toast.add({ title: "Изменено" });
  } catch (e) {
    console.error(e);
    toast.add({
      title: "Неизвестная ошибка",
      color: "red",
      icon: "i-material-symbols-error",
    });
  }
}
</script>

<template>
  <div id="admin-socials" class="admin-socials">
    <div style="margin: 50px 0">
      <UDivider label="СОЦ. СЕТИ И НАСТРОЙКИ" />
    </div>
    <div class="socials__socials">
      <div class="vk socials__social">
        <label class="socials__label">
          ВК
          <UInput v-model="vk" />
        </label>
        <UButton block class="socials__save" @click="saveVk">Сохранить</UButton>
      </div>
      <div class="telegram socials__social">
        <label class="socials__label">
          Телеграм
          <UInput v-model="telegram" />
        </label>
        <UButton block class="socials__save" @click="saveTelegram"
          >Сохранить</UButton
        >
      </div>
      <div class="email socials__social">
        <label class="socials__label">
          Email
          <UInput v-model="email" />
        </label>
        <UButton block class="socials__save" @click="saveEmail"
          >Сохранить</UButton
        >
      </div>
      <div class="euro socials__social">
        <label class="socials__label">
          Курс евро
          <UInput v-model="euro" type="number" />
        </label>
        <UButton block class="socials__save" @click="saveEuro"
          >Сохранить</UButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.socials {
  &__label {
    display: grid;
    gap: 10px;
  }
  &__socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }

  &__social {
    display: grid;
    gap: 10px;
  }
}
</style>
