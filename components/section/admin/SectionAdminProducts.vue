<script setup lang="ts">
import type { Product } from "@prisma/client";

const { data: groups } = useFetch("/api/group/");
const tabs = groups.value?.map((group) => {
  return {
    key: group.id,
    label: group.name,
  };
});

const columns = [
  {
    key: "name",
    label: "Название",
    sortable: true,
  },
  {
    key: "price",
    label: "Цена",
    sortable: true,
  },
  {
    key: "sale",
    label: "Скидка",
    sortable: true,
  },
  {
    key: "salePrice",
    label: "Цена со скидкой",
    sortable: true,
  },
  {
    key: "imageName",
    label: "Название изображение",
  },
  {
    key: "actions",
    label: "Действия",
  },
];

const products = ref<Product[] | null>([]);
const loading = ref<boolean>(true);

if (groups.value && groups.value[0]) {
  await getProducts(groups.value[0].id);
} else {
  loading.value = false;
}

async function getProducts(groupId: number) {
  console.log(groupId);
  const data = await $fetch(`/api/product/group/${groupId}`);

  loading.value = false;

  products.value = data as unknown as Product[];
}

const pageCount = 10;
const page = ref(1);
const toast = useToast();
const chosenToChnage = ref(NaN);
const isOpen = ref(false);
const isOpenChange = ref(false);
let tabIndex = 0;

const rows = computed(() => {
  if (!products.value) return [];
  if (!products.value.length) return [];

  return products.value.slice(
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

async function onChange(index: number) {
  tabIndex = index;
  page.value = 1;
  await getProducts(tabs![tabIndex].key);
}
async function deleteOne(id: number) {
  try {
    await $fetch(`/api/product/${id}`, { method: "DELETE" });
    toast.add({ title: "Удалено" });
    await getProducts(tabs![tabIndex].key);
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
  await getProducts(tabs![tabIndex].key);
}
async function changed() {
  isOpenChange.value = false;
  await getProducts(tabs![tabIndex].key);
}
</script>

<template>
  <section id="admin-products" class="admin-products">
    <div style="margin: 50px 0">
      <UDivider label="ТОВАРЫ" />
    </div>
    <UTabs :items="tabs" class="w-full" @change="onChange" />
    <UTable
      :rows="rows"
      :loading="loading"
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
          />
        </UDropdown>
      </template>
    </UTable>
    <div class="table__tools">
      <UPagination
        v-if="!loading"
        v-model="page"
        :page-count="pageCount"
        :total="products ? products.length : 0"
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
      <FormProductCreate @done="created()" />
    </USlideover>
    <USlideover v-model="isOpenChange">
      <FormProductUpdate :id="chosenToChnage" @done="changed()" />
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
