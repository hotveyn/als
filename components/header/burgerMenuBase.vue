<script setup lang="ts">
const props = defineProps<{
  clickFunction: () => void;
  isActive: boolean;
}>();
const { isActive } = toRefs(props);
const clickButton = () => {
  props.clickFunction();
};
</script>

<template>
  <div class="burger" @click="clickButton">
    <span class="burger__line" :class="{ 'burger__line-active': isActive }" />
    <span class="burger__line" :class="{ 'burger__line-active': isActive }" />
    <span class="burger__line" :class="{ 'burger__line-active': isActive }" />
  </div>
</template>

<style scoped lang="scss">
.burger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  &__line {
    border: 2px solid black;
    width: 25px;
    border-radius: 15px;
    transition: all 0.3s linear;
    &:nth-child(2) {
      width: 20px;
    }
    &-active {
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}
</style>
