<script setup lang="ts">
definePageMeta({
  layout: false,
});

const buttonMessage = ref("Войти");

const formValues = reactive({
  code: "",
});

async function goLogin() {
  if (!formValues.code) {
    changeButtonText("Забыл вписать код");
    return;
  }
  try {
    await $fetch("/api/auth/login", {
      method: "post",
      body: formValues,
    });

    window.location.replace("/admin");
  } catch (e) {
    changeButtonText("Ошибка входа");
  }
}

function changeButtonText(text: string) {
  buttonMessage.value = text;

  setTimeout(() => {
    buttonMessage.value = "Войти";
  }, 3000);
}
</script>

<template>
  <div class="login">
    <h1 class="">Введите код</h1>
    <form class="login__form">
      <input
        v-model="formValues.code"
        class="login__input"
        type="text"
        placeholder="Код"
      />
      <ButtonBase class="button" @click.prevent="goLogin">
        {{ buttonMessage }}
      </ButtonBase>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__input {
    border: 2px solid $grey;
    border-radius: 15px;
    font-size: 18px;
    text-align: center;
    padding: 15px 20px;
    outline: 0;
  }

  &__form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
}
</style>
