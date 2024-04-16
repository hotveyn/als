<script setup lang="ts">
import {
  string,
  objectAsync,
  number,
  minLength,
  type Input,
  maxLength,
  minValue,
  maxValue,
} from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  name: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
  vkLink: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
  imageName: nullish(
    string([
      minLength(3, "Длина хотя бы 3 символа"),
      maxLength(255, "Длина не больше 255 символов"),
    ]),
  ),
  priority: number([
    minValue(-99999999, "Слишком мало"),
    maxValue(99999999, "Слишком много"),
  ]),
  price: number([
    minValue(-99999999, "Слишком мало"),
    maxValue(99999999, "Слишком много"),
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
  vkLink: "",
  imageName: "",
  priority: 0,
  price: 0,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    await $fetch("/api/last-orders/", {
      method: "post",
      body: event.data,
    });

    loading.value = false;
    emit("done");
    toast.add({
      title: "Последний заказ создан",
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
    <h3 class="h3 form-action-create__title">Создание последнего заказа</h3>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Название" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Название изображения" name="imageName">
        <UInput v-model="state.imageName" />
      </UFormGroup>
      <UFormGroup label="Ссылка на товар" name="vkLink">
        <UTextarea v-model="state.vkLink" autoresize />
      </UFormGroup>
      <UFormGroup label="Приоритет" name="priority">
        <UInput v-model="state.priority" type="number" />
      </UFormGroup>
      <UFormGroup label="Цена" name="price">
        <UInput v-model="state.price" type="number" />
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
