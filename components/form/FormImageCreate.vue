<script setup lang="ts">
import { string, objectAsync, minLength, type Input, maxLength } from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  name: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
});

const file = ref();

const toast = useToast();
const loading = ref(false);
const emit = defineEmits<{
  done: [];
}>();
type Schema = Input<typeof schema>;

const state = reactive({
  name: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const formData = new FormData();
    formData.append("file", file.value);
    loading.value = true;
    await $fetch(`/api/images/${event.data.name}`, {
      method: "post",
      body: formData,
    });
    loading.value = false;
    emit("done");
    toast.add({
      title: "Изображение добавлено",
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
function handleFileUpload(event: any) {
  if (event && event.target && event.target.files && event.target.files[0]) {
    file.value = event.target.files[0];
  }
}
</script>

<template>
  <div class="form-action-create">
    <h3 class="h3 form-action-create__title">Добавление картинки</h3>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Название" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Файл изображения">
        <input type="file" @change="handleFileUpload" />
      </UFormGroup>

      <UButton :loading="loading" type="submit" block> Добавить </UButton>
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
