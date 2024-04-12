<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: false,
});

const router = useRouter();
async function logout() {
  await $fetch("/api/auth/logout", {
    method: "POST",
  });
  await router.push({ path: "/login" });
}
</script>

<template>
  <div class="admin">
    <div class="admin__layout">
      <SectionAdminLastOrders />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  &__layout {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
