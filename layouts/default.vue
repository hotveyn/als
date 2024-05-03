<template>
  <div class="layout-default">
    <HeaderOne />
    <main class="content">
      <slot />
    </main>
    <FooterOne />
  </div>
</template>

<style scoped>
.layout-default {
  position: relative;
  z-index: -2;
  background-color: white;
}
main {
  position: relative;
}
</style>
