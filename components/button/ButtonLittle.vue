<template>
  <button class="button-little">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-little {
  cursor: pointer;
  padding: 10px 20px;
  border: 2.5px solid rgba(0, 185, 75, 1);
  border-radius: 50px;
  background-color: rgba(0, 185, 75, 1);

  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  text-align: center;
  color: white;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(40, 225, 115, 1);
    color: rgba(40, 225, 115, 1);
    background-color: white;
  }

  &:active {
    border-color: rgba(159, 175, 164, 1);
    color: rgba(159, 175, 164, 1);
  }
}
</style>
