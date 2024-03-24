<script setup lang="ts">
const products = ref([
  {
    id: 1,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 2,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 3,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 4,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 5,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 6,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 7,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 8,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
  {
    id: 9,
    imgLink: "/images/catalog/catalog.png",
    name: "TOM FORD FUCKING FABULOS 30ml",
    price: 59999,
    salePrice: 39999,
    sale: 30,
  },
]);
</script>

<template>
  <div class="catalog">
    <div class="container catalog__content">
      <div class="catalog__header">
        <h2 class="catalog__title h2">КАТАЛОГ</h2>
        <div class="catalog__tabs">
          <ButtonLittle class="catalog__tab">Косметика</ButtonLittle>
          <ButtonLittle class="catalog__tab">Одежда</ButtonLittle>
          <ButtonLittle class="catalog__tab">Обувь</ButtonLittle>
          <ButtonLittle class="catalog__tab">Аксесуары</ButtonLittle>
        </div>
      </div>
      <div class="catalog__products">
        <Swiper
          ref="swiper"
          class="catalog__swipers"
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="6"
          :height="343"
          :space-between="10"
        >
          <SwiperSlide v-for="product in products" :key="product.id">
            <CardCatalog :product="product" />
          </SwiperSlide>
        </Swiper>
      </div>
      <a href="#" class="catalog__link">
        Посмотреть весь каталог
        <img src="/assets/icons/red.svg" alt="red " />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  width: 100%;

  &__link {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 9px;
  }

  &__products {
    margin-top: 27px;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__tabs {
    display: flex;
    gap: 24px;
  }
}
</style>
