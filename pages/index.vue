<script lang="ts"></script>

<template>
  <div class="index">
    <div class="index__sections">
      <SectionHero />
      <SectionBrands />
      <SectionWhy />
      <SectionCatalog />
      <SectionCompute />
      <SectionWorks />
      <SectionFAQ />
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
