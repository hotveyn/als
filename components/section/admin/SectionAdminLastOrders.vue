<script setup lang="ts">
const columns = [
  {
    key: "imgLink",
    label: "Ссылка на изображение",
    sortable: true,
  },
  {
    key: "price",
    label: "Цена",
    sortable: true,
  },
];

const { data: lastOrders } = useFetch("/api/last-orders/");
</script>

<template>
  <div class="admin-last-orders">
    <h2 class="h2">Последнии заказы</h2>
    <UTable :rows="lastOrders" :columns="columns" />
  </div>
</template>
