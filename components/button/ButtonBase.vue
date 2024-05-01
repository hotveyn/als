<script setup lang="ts">
defineProps<{
  link?: string;
}>();
</script>

<template>
  <a v-if="link" target="_blank" :href="link" class="button-base"><slot /></a>
  <button v-else class="button-base">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-base {
  display: flex;
  width: fit-content;
  cursor: pointer;
  padding: 18px 29.5px;
  border: none;
  border-radius: 50px;
  background-color: rgba(0, 185, 75, 1);

  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  text-align: center;
  color: white;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(40, 225, 115, 1);
  }
}
</style>
