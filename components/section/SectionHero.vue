<script setup lang="ts">
import { type Swiper } from "swiper";
const swiper = ref<Swiper | undefined>(undefined);

const { data: lastOrders } = useFetch("/api/last-order");

function setSwiperInstance(swiperInstance: Swiper) {
  swiper.value = swiperInstance;
}
</script>

<template>
  <div id="hero" class="opener">
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
          <p class="last__h">Последнии Заказы</p>
          <Swiper
            class="last__orders"
            :modules="[SwiperPagination, SwiperNavigation]"
            :slides-per-view="3"
            :height="250"
            :space-between="24"
            @swiper="setSwiperInstance"
          >
            <SwiperSlide v-for="lastOrder in lastOrders" :key="lastOrder.id">
              <CardLastOrder :order="lastOrder" />
            </SwiperSlide>
          </Swiper>
          <img
            v-show="!swiper?.isBeginning"
            class="last__pagination-arrow last__pagination-arrow_left"
            src="/icons/hero/arr.svg"
            alt="arrow"
            @click="swiper?.slidePrev()"
          />
          <img
            v-show="!swiper?.isEnd"
            class="last__pagination-arrow last__pagination-arrow_right"
            src="/icons/hero/arr.svg"
            alt="arrow"
            @click="swiper?.slideNext()"
          />
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
  position: relative;
  width: fit-content;

  &__pagination-arrow {
    cursor: pointer;
    position: absolute;
    top: calc(50% - 40px);
    z-index: 100;

    &_right {
      right: -20px;
    }

    &_left {
      left: -20px;
      transform: rotateY(180deg);
    }
  }

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
