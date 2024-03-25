<script setup lang="ts">
const kinds = ref([
  {
    img: "bad.svg",
  },
  {
    img: "cofta.svg",
  },
  {
    img: "glasses.svg",
  },
  {
    img: "kurtka.svg",
  },
  {
    img: "pamada.svg",
  },
  {
    img: "pants.svg",
  },
  {
    img: "parfum.svg",
  },
  {
    img: "shoes.svg",
  },
  {
    img: "tonik.svg",
  },
  {
    img: "tshirt.svg",
  },
  {
    img: "watch.svg",
  },
  {
    img: "wbag.svg",
  },
]);
</script>

<template>
  <div class="compute">
    <div class="compute__content container">
      <h2 class="compute__h2 h2">Расчёт цены</h2>
      <ComputeMenu />
      <div class="compute__products"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.compute {
  width: 100%;
}
</style>
