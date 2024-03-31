<script setup lang="ts">
defineProps<{
  selected: boolean;
}>();
</script>

<template>
  <button class="button-little" :class="{ 'button-little_selected': selected }">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-little {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  text-align: center;
  transition: all 0.2s;

  border: 2.5px solid #9fafa4;
  background-color: white;
  color: #9fafa4;

  &:hover {
    border-color: rgba(40, 225, 115, 1);
    color: rgba(40, 225, 115, 1);
    background-color: white;
  }

  &:active {
    border: 2.5px solid rgba(0, 185, 75, 1);
    background-color: rgba(0, 185, 75, 1);
    color: white;
  }

  &_selected {
    border: 2.5px solid rgba(0, 185, 75, 1);
    background-color: rgba(0, 185, 75, 1);
    color: white;

    &:hover {
      border: 2.5px solid rgba(0, 185, 75, 1);
      background-color: rgba(0, 185, 75, 1);
      color: white;
    }

    &:active {
      border: 2.5px solid rgba(0, 185, 75, 1);
      background-color: rgba(0, 185, 75, 1);
      color: white;
    }
  }
}
</style>
