<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  order: {
    id: number;
    imageName: string;
    price: number;
    vkLink: string;
  };
}>();
</script>

<template>
  <a :href="order.vkLink" target="_blank">
    <div class="card-last-order">
      <img
        :src="`/uploads/${order.imageName}.png`"
        alt="orderLink"
        class="card-last-order__img"
      />
      <p class="card-last-order__price">
        {{ new Intl.NumberFormat("ru-RU").format(order.price) }}₽
      </p>
    </div>
  </a>
</template>

<style scoped lang="scss">
.card-last-order {
  cursor: pointer;
  aspect-ratio: 1;
  border-radius: 15px;
  border: 3px solid rgba(199, 199, 199, 0.3);
  box-shadow: 0 4px 4px 0 rgba(209, 225, 214, 0.3);
  overflow: hidden;
  position: relative;

  transition: border 0.2s;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: 3px solid $green;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 19.5px;
    padding: 5px 10px;
    color: white;
    background-color: $green;
    position: absolute;
    border-radius: 74px;
    right: 10px;
    bottom: 10px;
  }
}
</style>
