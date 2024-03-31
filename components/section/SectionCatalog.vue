<script setup lang="ts">
import { type Swiper } from "swiper";
import type { IProduct } from "~/server/api/product/[groupId].get";

function setSwiperInstance(swiperInstance: Swiper) {
  swiper.value = swiperInstance;
}

const selectedGroupId = ref<number | null>(null);

const { data: productGroups } = await useFetch("/api/group");

const products = ref<IProduct[] | null>(null);
const loading = ref<boolean>(true);

const swiper = ref<Swiper | undefined>(undefined);

if (productGroups.value && productGroups.value[0]) {
  selectedGroupId.value = productGroups.value[0].id;
  await getProducts(productGroups.value[0].id);
}

async function selectGroup(id: number) {
  selectedGroupId.value = id;
  await getProducts(id);
}

async function getProducts(groupId: number) {
  const { data: responseProduct } = await useFetch(`/api/product/${groupId}`);

  loading.value = false;

  products.value = responseProduct.value;
}
</script>

<template>
  <div id="catalog" class="catalog">
    <div class="container catalog__content">
      <div class="catalog__header">
        <h2 class="catalog__title h2">КАТАЛОГ</h2>
        <div class="catalog__tabs">
          <ButtonLittle
            v-for="productGroup in productGroups"
            :key="productGroup.id"
            class="catalog__tab"
            :selected="productGroup.id === selectedGroupId"
            @click="selectGroup(productGroup.id)"
          >
            {{ productGroup.name }}
          </ButtonLittle>
        </div>
      </div>
      <div v-if="!loading" class="catalog__products">
        <Swiper
          class="catalog__swipers"
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="6"
          :height="343"
          :space-between="10"
          @swiper="setSwiperInstance"
        >
          <SwiperSlide v-for="product in products" :key="product.id">
            <CardCatalog :product="product" />
          </SwiperSlide>
        </Swiper>
        <img
          v-show="!swiper?.isBeginning"
          class="catalog__pagination-arrow catalog__pagination-arrow_left"
          src="/icons/hero/arr.svg"
          alt="arrow"
          @click="swiper?.slidePrev()"
        />
        <img
          v-show="!swiper?.isEnd"
          class="catalog__pagination-arrow catalog__pagination-arrow_right"
          src="/icons/hero/arr.svg"
          alt="arrow"
          @click="swiper?.slideNext()"
        />
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
    position: relative;
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
}
</style>
