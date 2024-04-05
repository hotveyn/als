<script setup lang="ts">
import { type Swiper } from "swiper";
const swiper = ref<Swiper | undefined>(undefined);

const { data: lastOrders } = useFetch("/api/last-order");

function setSwiperInstance(swiperInstance: Swiper) {
  swiper.value = swiperInstance;
}
const slideWidth = computed<number>(() => {
  if (window?.innerWidth > 670) {
    return 31;
  } else if (window?.innerWidth > 530) {
    return 47;
  } else {
    return 97;
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
          <!-- opener__button-desktop -->
          <ButtonBase class="opener__button">Заказать подарок</ButtonBase>
        </div>
      </div>
      <div class="opener__right">
        <!-- <ButtonBase class="opener__button opener__button-mobile"
          >Заказать подарок</ButtonBase
        > -->
        <img class="opener__img" src="/images/alshero.png" alt="" />
      </div>
      <div class="opener__last last">
        <p class="last__h">Последнии Заказы</p>
        <Swiper
          class="last__orders"
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="'auto'"
          :height="250"
          :space-between="24"
          @swiper="setSwiperInstance"
        >
          <SwiperSlide
            v-for="lastOrder in lastOrders"
            :key="lastOrder.id"
            :style="{ width: `${slideWidth}%` }"
          >
            <CardLastOrder :order="lastOrder" class="last__card" />
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
</template>
<style scoped lang="scss">
.opener {
  margin-top: 100px;
  width: 100%;
  &__content {
    display: grid;
    grid-template-columns: 55% 45%;
    gap: 30px;
  }

  &__title {
    max-width: 100%;
  }

  &__description {
    margin-top: adpval(20, 30);
    color: $grey;
    font-weight: 700;
    font-size: adpval(24, 32);
    line-height: adpval(29, 39);
  }

  &__button {
    margin-top: 30px;
  }

  &__right {
    position: relative;
    min-height: adpval(400, 500, 1620, 880);
  }

  &__img {
    z-index: -1;
    position: absolute;
    top: adpval(-150, -50, 1620, 880);
    max-width: adpval(554, 805, 1620, 880);
  }
}

.last {
  position: relative;
  bottom: 80px;
  width: 100%;

  &__pagination-arrow {
    cursor: pointer;
    position: absolute;
    top: calc(50%);
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
    margin: 30px 0 0 0;
    overflow: hidden;
    text-align: center;
  }
}

@media screen and (min-width: 1240px) {
  .opener {
    &__button {
      &-desktop {
        display: block;
      }
      &-mobile {
        display: none;
      }
    }

    &__orders {
      // bottom: 200px;
      max-width: 800px;
    }
  }
}

@media screen and (max-width: 1239px) {
  .opener {
    &__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

    &__img {
      right: -50px;
    }
  }
}

@media screen and (max-width: 900px) {
}

@media screen and (max-width: 670px) {
  // .last {
  //   bottom: 0;
  //   &__orders {
  //     max-width: 280px;
  //   }
  // }
  // .opener {
  // &__title {
  //   line-height: 40px;
  // }
  // &__left {
  //   justify-items: center;
  //   gap: 20px;
  // }
  // &__right {
  //   align-items: center;
  // }
  // &__card {
  //   width: 280px;
  // }
  // }
}
</style>
