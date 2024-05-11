<script setup lang="ts">
import type { Kind } from "../section/SectionCompute.vue";

const props = defineProps<{
  kind: Kind;
}>();

const value = ref(1);

const { data: euro } = useFetch("/api/euro/");

const mass = computed(() => value.value * props.kind.mass);
const massInKg = computed(() => mass.value / 1000);
const pricePerKg = computed(() => 7 * Number(euro.value!.value));
const priceByMass = computed(() => massInKg.value * pricePerKg.value);
const minimalPrice = computed(() => 15 * Number(euro.value!.value));

const price = computed(() => {
  if (priceByMass.value > minimalPrice.value) return priceByMass.value;

  return minimalPrice.value;
});

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
    <div class="compute-menu__wrap">
      <div class="compute-menu__content">
        <div class="compute-menu__info">
          <p class="p">Вес посылки в граммах.</p>
          <p class="p compute-menu__kolvo">{{ kind.text }}: {{ value }}</p>
        </div>
        <div class="compute-menu__input number-input">
          <p disabled class="number-input__input">
            {{ Math.round(mass) }}
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
        <div class="compute-menu__delivery-price">{{ Math.round(price) }}₽</div>
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

  &__wrap {
    width: 100%;
    max-width: 550px;
    display: grid;
    grid-template-columns: 75% 20%;
    gap: 24px;
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
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
    width: fit-content;
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

@media screen and (max-width: 1050px) {
  .compute-menu {
    flex-wrap: wrap;
  }
}

.number-input {
  width: 100%;
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
  .number-input,
  .compute-menu__content {
    max-width: 387px;
  }

  .number-input {
    grid-template-columns: 80% 14px 14px;
  }
}

@media screen and (max-width: 550px) {
  .compute-menu__wrap {
    grid-template-columns: 1fr;
  }
}
</style>
