<script setup lang="ts">
defineEmits<{
  hideModal: [];
}>();
</script>

<template>
  <div
    class="modal-wrapper"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    @click.self="$emit('hideModal')"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.modal-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #00000057;
  position: fixed;
  top: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
