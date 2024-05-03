<script setup lang="ts">
import {
  string,
  objectAsync,
  number,
  minLength,
  type Input,
  maxLength,
  minValue,
  nullish,
  maxValue,
} from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  name: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
  title: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
  description: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(555, "Длина не больше 555 символов"),
  ]),
  priority: number([
    minValue(-99999999, "Слишком мало"),
    maxValue(99999999, "Слишком много"),
  ]),
  time: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
  imageName: nullish(string([maxLength(255, "Длина не больше 255 символов")])),
  conditions: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(1000, "Длина не больше 1000 символов"),
  ]),
});

const toast = useToast();
const loading = ref(false);
const emit = defineEmits<{
  done: [];
}>();
type Schema = Input<typeof schema>;

const state = reactive({
  name: "",
  title: "",
  description: "",
  imageName: "",
  priority: 0,
  time: "",
  conditions: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    await $fetch("/api/action/", {
      method: "post",
      body: {
        ...event.data,
        conditions: event.data.conditions.split("/"),
      },
    });

    loading.value = false;
    emit("done");
    toast.add({
      title: "Акция создана",
    });
  } catch (e) {
    toast.add({
      title: "Что то сломалось",
      color: "red",
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="form-action-create">
    <h3 class="h3 form-action-create__title">Создание акции</h3>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Название" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Заголовок" name="title">
        <UInput v-model="state.title" />
      </UFormGroup>
      <UFormGroup label="Название изображения" name="imageName">
        <UInput v-model="state.imageName" />
      </UFormGroup>

      <UFormGroup label="Описание" name="description">
        <UTextarea v-model="state.description" autoresize />
      </UFormGroup>

      <UFormGroup label="Приоритет" name="priority">
        <UInput v-model="state.priority" type="number" />
      </UFormGroup>

      <UFormGroup label="Сколько ещё длится акция" name="time">
        <UInput v-model="state.time" />
      </UFormGroup>
      <UFormGroup label="Сколько ещё длится акция" name="conditions">
        <UTextarea
          v-model="state.conditions"
          autoresize
          placeholder="Условия через знак '/'"
        />
      </UFormGroup>

      <UButton :loading="loading" type="submit" block> Создать </UButton>
    </UForm>
  </div>
</template>

<style lang="scss">
.form-action-create {
  width: 100%;
  height: 100%;
  padding: 50px 20px;
}
</style>
