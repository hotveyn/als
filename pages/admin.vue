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
      <div class="admin__section">
        <SectionAdminGroups />
      </div>
      <div class="admin__section">
        <SectionAdminSocials />
      </div>
      <div class="admin__section">
        <SectionAdminActions />
      </div>
      <div class="admin__section">
        <SectionAdminProducts />
      </div>
      <div class="admin__section">
        <SectionAdminLastOrders />
      </div>
      <div class="admin__section">
        <SectionAdminAlbum />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  background-color: rgb(240, 240, 240);

  &__section {
    background-color: white;
    padding: 0 30px 30px 30px;
    border-radius: 20px;
  }

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
