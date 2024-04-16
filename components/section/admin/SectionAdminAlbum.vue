<script setup lang="ts">
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

const { data: lastOrders, refresh } = useFetch("/api/images/");

const pageCount = 10;
const page = ref(1);
const toast = useToast();
const isOpen = ref(false);

const rows = computed(() => {
  return lastOrders.value!.slice(
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
        :total="lastOrders && lastOrders.length"
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
  </section>
</template>

<style scoped lang="scss">
.table__tools {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
