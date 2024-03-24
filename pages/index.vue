<script lang="ts"></script>

<template>
  <div class="index">
    <div class="index__sections">
      <SectionOpener />
      <SectionBrands />
      <SectionWhy />
      <SectionCatalog />
    </div>
  </div>
</template>

<style scoped lang="scss">
.index {
  &__sections {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 130px;
  }
}
</style>
