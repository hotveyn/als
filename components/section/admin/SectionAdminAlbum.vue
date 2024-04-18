<script setup lang="ts">
import type { Image } from "@prisma/client";

const columns = [
  {
    key: "name",
    label: "Название фото",
  },
  {
    key: "actions",
    label: "Действия",
  },
];

const { data: images, refresh } = useFetch("/api/images/");

const pageCount = 10;
const page = ref(1);
const toast = useToast();
const isOpen = ref(false);
const isModal = ref(false);
const imageToSee = ref<Image>();

const rows = computed(() => {
  return images.value!.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount,
  );
});

function items(row: {
  id: number;
  imgLink: string;
  name: string;
  vkLink: string;
  price: number;
}) {
  return [
    [
      {
        label: "Удалить",
        icon: "i-heroicons-trash-20-solid",
        click: () => deleteOne(row.name),
      },
    ],
    [
      {
        label: "Посмотреть изображение",
        icon: "i-heroicons-arrows-pointing-out",
        click: () => seeImage(row.name),
      },
    ],
  ];
}

async function deleteOne(id: string) {
  try {
    await $fetch(`/api/images/${id}`, { method: "DELETE" });
    toast.add({ title: "Удалено" });
    await refresh();
  } catch (e) {
    toast.add({ title: "Неизвестная ошибка", color: "red" });
  }
}
async function created() {
  isOpen.value = false;
  await refresh();
}

function seeImage(name: string) {
  const img = images.value?.find((image) => image.name === name);
  if (img) {
    isModal.value = true;
    imageToSee.value = img as unknown as Image;
  }
}
</script>

<template>
  <section id="admin-actions" class="admin-actions">
    <div style="margin: 50px 0">
      <UDivider label="ФОТОАЛЬБОМ" />
    </div>
    <UTable
      :rows="rows"
      :columns="columns"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'No items.',
      }"
    >
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          /> </UDropdown
      ></template>
    </UTable>
    <div class="table__tools">
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="images && images.length"
      />
      <UButton
        class="socials__save"
        @click="
          () => {
            isOpen = true;
          }
        "
      >
        Добавить
      </UButton>
    </div>
    <USlideover v-model="isOpen">
      <FormImageCreate @done="created()" />
    </USlideover>
    <UModal v-model="isModal">
      <div class="img-wrapper">
        <img
          :src="`/uploads/${imageToSee?.name}`"
          alt="asd"
          class="img-to-see"
        />
      </div>
    </UModal>
  </section>
</template>

<style scoped lang="scss">
.table__tools {
  display: flex;
  align-items: center;
  gap: 10px;
}

.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-to-see {
  max-width: 80dvw;
  max-height: 80dvh;
}
</style>
