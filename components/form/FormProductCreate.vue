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
  nullish,
} from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const schema = objectAsync({
  name: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(255, "Длина не больше 255 символов"),
  ]),
  vkLink: string([
    minLength(3, "Длина хотя бы 3 символа"),
    maxLength(555, "Длина не больше 555 символов"),
  ]),
  sale: number([
    minValue(-999999999, "Слишком мало"),
    maxValue(999999999, "Слишком много"),
  ]),
  imageName: nullish(
    string([
      minLength(3, "Длина хотя бы 3 символа"),
      maxLength(255, "Длина не больше 255 символов"),
    ]),
  ),
  salePrice: number([
    minValue(-999999999, "Слишком мало"),
    maxValue(999999999, "Слишком много"),
  ]),
  price: number([
    minValue(-99999999, "Слишком мало"),
    maxValue(999999999, "Слишком много"),
  ]),
  groupId: string("Нужно выбрать категорию"),
});

const { data: groups } = await useFetch("/api/group/");

const selectData = computed(() => {
  return groups.value?.map((group) => ({
    label: group.name,
    value: Number(group.id),
  }));
});

const firstSelect = computed(() => {
  return selectData.value && selectData.value[0].value;
});

const toast = useToast();
const loading = ref(false);
const emit = defineEmits<{
  done: [];
}>();
type Schema = Input<typeof schema>;

const state = reactive({
  name: "",
  imageName: "",
  vkLink: "",
  sale: 0,
  salePrice: 0,
  groupId: String(firstSelect.value) || undefined,
  price: 0,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    await $fetch("/api/product/", {
      method: "post",
      body: { ...event.data, groupId: Number(event.data.groupId) },
    });

    loading.value = false;
    emit("done");
    toast.add({
      title: "Товар создан",
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
    <h3 class="h3 form-action-create__title">Создание товара</h3>
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
      <UFormGroup label="Скидка" name="sale">
        <UInput v-model="state.sale" type="number" />
      </UFormGroup>
      <UFormGroup label="Цена со скидкой" name="salePrice">
        <UInput v-model="state.salePrice" type="number" />
      </UFormGroup>
      <UFormGroup label="Цена" name="price">
        <UInput v-model="state.price" type="number" />
      </UFormGroup>
      <UFormGroup label="Категория" name="groupId">
        <USelect v-model="state.groupId" :options="selectData" />
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
