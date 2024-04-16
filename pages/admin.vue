<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: false,
});
</script>

<template>
  <div class="admin">
    <UNotifications />
    <div class="admin__layout">
      <SectionAdminAlbum />
      <SectionAdminSocials />
      <SectionAdminActions />
      <SectionAdminProducts />
      <SectionAdminLastOrders />
      <SectionAdminGroups />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  &__layout {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px 0;
  }
}
</style>
