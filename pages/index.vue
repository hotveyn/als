<script lang="ts" setup>
useSeoMeta({
  title: "ALS | Доставка товаров из Европы в РФ",
  ogTitle: "ALS | Доставка товаров из Европы в РФ",
  description:
    "Доставка из Европы одежды косметики сумок и аксессуаров. Заказ посылок из ЕС. Заказ брендовой одежды из Европы. Доставка посылок в Россию",
  ogDescription:
    "ALS — ваш надёжный партнёр в доставке товаров из Европы в Россию. Мы предоставляем быструю и надежную услугу доставки, помогая вам получить желанные товары известных европейских брендов прямо к вам домой. Оптимизируйте свой шоппинг с ALS уже сегодня!",
  ogImage: "https://als-shop.ru/images/alshero.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="index">
    <SectionActions />
    <div class="index__sections">
      <SectionHero />
      <SectionBrands />
      <SectionHow />
      <SectionWhy />
      <SectionCatalog />
      <SectionCompute />
      <SectionWorks />
      <!-- <SectionFAQ /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.index {
  &__sections {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
    gap: adpval(80, 130);
  }
}
</style>
