<script setup lang="ts">
import { string, objectAsync, minLength, type Input, maxLength } from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  name: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
});

const toast = useToast();
const loading = ref(false);
const emit = defineEmits<{
  done: [];
}>();
type Schema = Input<typeof schema>;
const props = defineProps<{
  id: number;
}>();

const { data: group } = await useFetch(`/api/group/${props.id}`);

const state = reactive({
  name: group.value!.name,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    await $fetch(`/api/group/${props.id}`, {
      method: "patch",
      body: event.data,
    });
    loading.value = false;
    emit("done");
    toast.add({
      title: "Категория изменена",
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
    <h3 class="h3 form-action-create__title">Изменение категории</h3>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Название" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UButton :loading="loading" type="submit" block> Изменить </UButton>
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
