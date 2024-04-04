<script setup lang="ts">
import type { Kind } from "../section/SectionCompute.vue";

defineProps<{
  kind: Kind;
}>();

const numberInput = ref<HTMLInputElement | null>(null);

const value = ref(1);

watch(value, (old) => {
  if (old > 500) {
    value.value = 500;
  } else if (old < 0) {
    value.value = 0;
  }
});
</script>

<template>
  <div class="compute-menu">
    <div class="compute-menu__content-wrapper">
      <div class="compute-menu__content">
        <div class="compute-menu__info">
          <p class="p">Вес посылки в кг.</p>
          <p class="p compute-menu__kolvo">{{ kind.text }}: {{ value }}</p>
        </div>
        <div class="compute-menu__input number-input">
          <p disabled class="number-input__input">
            {{ Math.round(value * kind.mass) }}
          </p>
          <img
            class="number-input__icon"
            src="/icons/plus.svg"
            alt="plus"
            @click="() => value++"
          />
          <img
            class="number-input__icon"
            src="/icons/minus.svg"
            alt="plus"
            @click="() => value--"
          />
        </div>
      </div>
      <div class="compute-menu__delivery">
        <p class="p">Доставка</p>
        <div class="compute-menu__delivery-price">
          {{ Math.round(value * kind.mass * kind.oneKgEqual) }}₽
        </div>
      </div>
    </div>
    <p class="p compute-menu__sup">
      Вес товара примерный и указан в количестве одной вещи
    </p>
  </div>
</template>

<style lang="scss" scoped>
.compute-menu {
  display: flex;
  gap: 24px;

  &__sup {
    width: 384px;
  }

  &__content {
    width: 387px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    &-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
      width: 100%;
      gap: 0 20px;
    }
  }

  &__delivery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }

  &__delivery-price {
    height: 70px;
    padding: 21px 20px;
    box-shadow: 0 4px 4px 0 #d1e1d64d;
    border: 2px solid #c7c7c780;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    color: black;
    text-align: center;
    min-width: 98px;
    gap: 10px;
  }

  &__info {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  &__kolvo {
    font-size: 16px;
  }
}

.number-input {
  width: 387px;
  padding: 21px 20px;
  box-shadow: 0 4px 4px 0 #d1e1d64d;
  border: 2px solid #c7c7c780;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 85% 14px 14px;
  align-items: center;
  gap: 10px;

  &__icon {
    cursor: pointer;
  }

  &__input {
    border: 0;
    outline: 0;
    font-size: 20px;
    font-weight: 600;
    color: black;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button,
    &[type="number"] {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}

@media screen and (max-width: 720px) {
  .compute-menu {
    flex-wrap: wrap;
    justify-content: center;
    &__sup {
      font-size: 16px;
      text-align: center;
    }
  }
  .number-input,
  .compute-menu__content {
    max-width: 387px;
    width: 100%;
  }
  .number-input {
    grid-template-columns: 80% 14px 14px;
  }
}
</style>