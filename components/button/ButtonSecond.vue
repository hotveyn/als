<template>
  <button class="button-second">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-second {
  cursor: pointer;
  padding: 18px 29.5px;
  border: 2.5px solid black;
  border-radius: 50px;
  background-color: white;

  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  text-align: center;
  color: black;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(40, 225, 115, 1);
    color: rgba(40, 225, 115, 1);
  }

  &:active {
    border-color: rgba(0, 185, 75, 1);
    background-color: rgba(0, 185, 75, 1);
    color: white;
  }
}
</style>
