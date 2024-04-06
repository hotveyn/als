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
main {
  position: relative;
}
</style>
