<script setup lang="ts">
export interface Kind {
  id: number;
  img: string;
  text: string;
  mass: number;
  oneKgEqual: number;
}
const kinds = ref<Kind[]>([
  {
    id: 1,
    img: "bag.svg",
    text: "Сумка",
    mass: 2,
    oneKgEqual: 1000,
  },
  {
    id: 2,
    img: "cofta.svg",
    text: "Кофта",
    mass: 4,
    oneKgEqual: 1000,
  },
  {
    id: 3,
    img: "glasses.svg",
    text: "Очки",
    mass: 1,
    oneKgEqual: 1000,
  },
  {
    id: 4,
    img: "kurtka.svg",
    text: "Куртка",
    mass: 1.1,
    oneKgEqual: 1000,
  },
  {
    id: 5,
    img: "pamada.svg",
    text: "Помада",
    mass: 1.05,
    oneKgEqual: 1000,
  },
  {
    id: 6,
    img: "pants.svg",
    text: "Штаны",
    mass: 6,
    oneKgEqual: 1000,
  },
  {
    id: 7,
    img: "parfum.svg",
    text: "Парфюм",
    mass: 0.01,
    oneKgEqual: 1000,
  },
  {
    id: 8,
    img: "shoes.svg",
    text: "Обувь",
    mass: 1.9,
    oneKgEqual: 1000,
  },
  {
    id: 9,
    img: "tonik.svg",
    text: "Тоник",
    mass: 0.3,
    oneKgEqual: 1000,
  },
  {
    id: 10,
    img: "tshirt.svg",
    text: "Футболка",
    mass: 1,
    oneKgEqual: 1000,
  },
  {
    id: 11,
    img: "watch.svg",
    text: "Часы",
    mass: 1,
    oneKgEqual: 1000,
  },
  {
    id: 12,
    img: "wbag.svg",
    text: "Рюкзак",
    mass: 1,
    oneKgEqual: 1000,
  },
]);

const selectedKind = ref<Kind>(kinds.value[0]);

function selectKind(id: Kind) {
  selectedKind.value = id;
}
</script>

<template>
  <div class="compute">
    <div class="compute__content container">
      <h2 class="compute__h2 h2">Расчёт цены</h2>
      <ComputeMenu :kind="selectedKind" class="compute__compute-menu" />
      <div class="compute__products">
        <div
          v-for="kind in kinds"
          :key="kind.id"
          class="compute__product product"
          :class="{ product_selected: kind.id === selectedKind.id }"
          @click="selectKind(kind)"
        >
          <img :src="`/icons/${kind.img}`" class="product__img" alt="product" />
          <p class="p product__info">{{ kind.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.compute {
  width: 100%;

  &__compute-menu {
    margin-top: 30px;
  }

  &__products {
    margin-top: 30px;
    display: flex;
  }
}

.product {
  cursor: pointer;
  width: 114px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  filter: grayscale(100%);

  transition: filter 0.2s;

  .product__info {
    color: #00b94b;
    transition: color 0.2s;
  }

  &_selected {
    filter: grayscale(0%);

    .product__info {
      color: #00b94b;
    }
  }

  &:hover {
    filter: grayscale(0%);

    .product__info {
      color: #00b94b;
    }
  }

  &__img {
    width: 60px;
  }
}
@media screen and (max-width: 1000px) {
  .compute {
    &__products {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px 0;
      align-items: center;
      justify-items: center;
    }
  }
}
@media screen and (max-width: 720px) {
  .compute {
    &__products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px 0;
    }
  }
}
@media screen and (max-width: 400px) {
  .compute {
    &__products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
