<script setup lang="ts">
import type { Product } from "@prisma/client";
import { defineProps } from "vue";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card-catalog">
    <p
      v-if="product.sale != undefined && product.sale !== 0"
      class="card-catalog__sale"
    >
      SALE {{ product.sale }}%
    </p>
    <img
      class="card-catalog__img"
      :src="`/uploads/${product.imageName}.png`"
      alt="product"
    />
    <div class="card-catalog__text">
      <p class="card-catalog__name">
        {{ product.name }}
      </p>
      <div class="card-catalog__prices">
        <p class="card-catalog__sale-price">
          {{
            new Intl.NumberFormat("ru-RU").format(
              product.salePrice === 0 ? product.price : product.salePrice,
            )
          }}₽
        </p>
        <p v-if="product.salePrice !== 0" class="card-catalog__price">
          {{ new Intl.NumberFormat("ru-RU").format(product.price) }}₽
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-catalog {
  transition: border-color 0.2s;
  border: 3px solid rgba(199, 199, 199, 0.3);
  box-shadow: 0 4px 5px 0 rgba(209, 225, 214, 0.3);
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 250px;
  position: relative;
  cursor: pointer;

  &:hover {
    border-color: $green;
  }

  &__text {
    padding: 10px 10px 20px 10px;
  }

  &__img {
    width: 250px;
    aspect-ratio: 250 / 238;
    object-fit: cover;
  }

  &__sale {
    line-height: 14.63px;
    padding: 5px 10px;
    background-color: $green;
    font-size: 12px;
    font-weight: 600;
    width: fit-content;
    border-radius: 27px;
    color: white;

    position: absolute;
    top: 20px;
    right: 20px;
  }

  &__name {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    line-height: 21.94px;
  }

  &__prices {
    margin-top: 10px;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  &__price {
    line-height: 17.07px;
    font-weight: 600;
    font-size: 14px;
    color: rgba(90, 119, 92, 1);
    text-decoration: line-through;
  }

  &__sale-price {
    line-height: 19.5px;
    font-weight: 600;
    font-size: 16px;
  }
}
// @media screen and (max-width: 900px) {
//   .card-catalog__img {
//     width: 180px;
//     height: 160px;
//   }
// }
</style>
