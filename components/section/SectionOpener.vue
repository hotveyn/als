<script setup lang="ts">
const swiper = ref<Swiper>(null);
const lastOrders = ref<any>([
  { id: 1, imgLink: "images/test1.png", price: 98874 },
  { id: 2, imgLink: "images/test1.png", price: 98874 },
  { id: 3, imgLink: "images/test1.png", price: 98874 },
  { id: 4, imgLink: "images/test1.png", price: 98874 },
  // { id: 5, imgLink: "images/test1.png", price: 98874 },
  // { id: 6, imgLink: "images/test1.png", price: 98874 },
  // { id: 7, imgLink: "images/test1.png", price: 98874 },
  // { id: 8, imgLink: "images/test1.png", price: 98874 },
]);

function test() {
  // swiperRef.value.nextSlide();
  console.dir(swiper.value);
}
</script>

<template>
  <div class="opener">
    <div class="container opener__content">
      <div class="opener__left">
        <div class="opener_info">
          <h1 class="opener__title h1">Импортные товары c Европы за неделю</h1>
          <p class="opener__description">
            Порадуй себя, близких или друзей подарками на новый год или просто
            так без повода
          </p>
          <ButtonBase class="opener__button">Заказать подарок</ButtonBase>
        </div>
        <div class="opener__last last">
          <p class="last__h" @click="test">Последнии Заказы</p>
          <Swiper
            ref="swiper"
            class="last__orders"
            :modules="[SwiperPagination, SwiperNavigation]"
            :slides-per-view="3"
            :height="300"
            :space-between="24"
          >
            <SwiperSlide v-for="lastOrder in lastOrders" :key="lastOrder.id">
              <CardLastOrder :order="lastOrder" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="opener__right">
        <img class="opener__img" src="/images/alshero.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.opener {
  margin-top: 100px;
  width: 100%;

  &__left {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  &__title {
    width: 862px;
  }

  &__description {
    margin-top: 30px;
    color: $grey;
    font-weight: 700;
    font-size: 32px;
    line-height: 39.01px;
  }

  &__button {
    margin-top: 30px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
  }

  &__img {
    position: relative;
    bottom: 100px;
    z-index: 1;
  }
}

.last {
  width: 100%;

  &__h {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__orders {
    max-width: 800px;
    margin: 30px 0 0 0;
    overflow: hidden;
  }
}
</style>
