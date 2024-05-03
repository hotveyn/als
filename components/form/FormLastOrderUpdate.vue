<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = v.objectAsync({
  name: v.string([
    v.minLength(3, "Длина хотя бы 3 символа"),
    v.maxLength(255, "Длина не больше 255 символов"),
  ]),
  vkLink: v.string([
    v.minLength(3, "Длина хотя бы 3 символа"),
    v.maxLength(555, "Длина не больше 555 символов"),
  ]),
  imageName: v.nullish(
    v.string([
      v.minLength(3, "Длина хотя бы 3 символа"),
      v.maxLength(255, "Длина не больше 255 символов"),
    ]),
  ),
  priority: v.number([
    v.minValue(-99999999, "Слишком мало"),
    v.maxValue(99999999, "Слишком много"),
  ]),
  price: v.number([
    v.minValue(-99999999, "Слишком мало"),
    v.maxValue(99999999, "Слишком много"),
  ]),
});
const props = defineProps<{
  id: number;
}>();

const toast = useToast();
const loading = ref(false);
const emit = defineEmits<{
  done: [];
}>();
type Schema = Input<typeof schema>;

const { data: lastOrder } = await useFetch(`/api/last-orders/${props.id}`);

const state = reactive({
  name: lastOrder.value!.name,
  vkLink: lastOrder.value!.vkLink,
  imageName: lastOrder?.value!?.imageName || "",
  priority: lastOrder.value!.priority,
  price: lastOrder.value!.price,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    await $fetch(`/api/last-orders/${props.id}`, {
      method: "patch",
      body: event.data,
    });

    loading.value = false;
    emit("done");
    toast.add({
      title: "Последний заказ изменен",
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
    <h3 class="h3 form-action-create__title">Изменение последнего заказа</h3>
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
