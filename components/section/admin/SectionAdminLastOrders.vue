<script setup lang="ts">
const columns = [
  {
    key: "name",
    label: "Название",
    sortable: true,
  },
  {
    key: "imageName",
    label: "Название изображение",
    sortable: true,
  },
  {
    key: "vkLink",
    label: "Ссылка на товар в VK",
    sortable: true,
  },
  {
    key: "price",
    label: "Цена",
    sortable: true,
  },
  {
    key: "actions",
    label: "Действия",
  },
];

const { data: lastOrders, refresh } = useFetch("/api/last-orders/");

const pageCount = 10;
const page = ref(1);
const toast = useToast();
const chosenToChnage = ref(NaN);
const isOpen = ref(false);
const isOpenChange = ref(false);

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
        label: "Изменить",
        icon: "i-heroicons-pencil-square-20-solid",
        click: () => change(row.id),
      },
      {
        label: "Удалить",
        icon: "i-heroicons-trash-20-solid",
        click: () => deleteOne(row.id),
      },
    ],
  ];
}

async function deleteOne(id: number) {
  try {
    await $fetch(`/api/action/${id}`, { method: "DELETE" });
    toast.add({ title: "Удалено" });
    await refresh();
  } catch (e) {
    toast.add({ title: "Неизвестная ошибка", color: "red" });
  }
}
async function change(id: number) {
  isOpenChange.value = true;
  chosenToChnage.value = id;
}
async function created() {
  isOpen.value = false;
  await refresh();
}
async function changed() {
  isOpenChange.value = false;
  await refresh();
}
</script>

<template>
  <section id="admin-last-orders" class="admin-last-orders">
    <div style="margin: 50px 0">
      <UDivider label="ПОСЛЕДНИИ ЗАКАЗЫ" />
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
      <FormLastOrderCreate @done="created()" />
    </USlideover>
    <USlideover v-model="isOpenChange">
      <FormLastOrderUpdate :id="chosenToChnage" @done="changed()" />
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
