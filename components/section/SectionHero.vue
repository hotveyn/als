<script setup lang="ts">
import { type Swiper } from "swiper";
const swiper = ref<Swiper | undefined>(undefined);

const { data: lastOrders } = useFetch("/api/last-order");

function setSwiperInstance(swiperInstance: Swiper) {
  swiper.value = swiperInstance;
}
const sliderPerView = computed<number>(() => {
  if (window?.innerWidth > 670) {
    return 3;
  } else {
    return 1;
  }
});
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
          <ButtonBase class="opener__button opener__button-desktop"
            >Заказать подарок</ButtonBase
          >
        </div>
        <div class="opener__right">
          <ButtonBase class="opener__button opener__button-mobile"
            >Заказать подарок</ButtonBase
          >
          <img class="opener__img" src="/images/alshero.png" alt="" />
        </div>
        <div class="opener__last last">
          <p class="last__h">Последнии Заказы</p>
          <Swiper
            class="last__orders"
            :modules="[SwiperPagination, SwiperNavigation]"
            :slides-per-view="sliderPerView"
            :height="250"
            :space-between="24"
            @swiper="setSwiperInstance"
          >
            <SwiperSlide v-for="lastOrder in lastOrders" :key="lastOrder.id">
              <CardLastOrder :order="lastOrder" class="opener__card" />
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
    </div>
  </div>
</template>
<style scoped lang="scss">
.opener {
  margin-top: 100px;
  width: 100%;
  &__left {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 30px;
  }

  &__title {
    max-width: 862px;
  }

  &__description {
    margin-top: 30px;
    color: $grey;
    font-weight: 700;
    font-size: adpval(22, 32);
    line-height: 39.01px;
  }

  &__button {
    margin-top: 30px;
  }
  &__right {
    position: relative;
    bottom: 100px;
  }
  &__img {
    max-width: adpval(300, 605);
  }
}

.last {
  position: relative;
  width: fit-content;
  bottom: 100px;
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
    text-align: center;
  }
}
@media screen and (min-width: 1550px) {
  .opener {
    &__button {
      &-desktop {
        display: block;
      }
      &-mobile {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1549px) {
  .opener {
    &__button {
      &-desktop {
        display: none;
      }
      &-mobile {
        display: block;
        align-self: baseline;
      }
    }
    &__left {
      grid-template-columns: 1fr;
      gap: 0;
    }
    &__right {
      bottom: 0;
      display: flex;
      flex-wrap: wrap;
    }
    &__img {
      position: relative;
      bottom: adpval(30, 100);
      z-index: -1;
    }
  }
}
@media screen and (max-width: 900px) {
  .last {
    &__orders {
      max-width: 600px;
    }
  }
  .opener {
    &__card {
      width: 180px;
    }
  }
}
@media screen and (max-width: 670px) {
  .last {
    bottom: 0;
    &__orders {
      max-width: 280px;
    }
  }
  .opener {
    &__button {
      margin: 0;
    }
    &__title {
      line-height: 40px;
    }
    &__left {
      justify-items: center;
      gap: 20px;
    }
    &__right {
      align-items: center;
    }
    &__card {
      width: 280px;
    }
  }
}
</style>
