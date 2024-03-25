<template>
  <div class="compute-menu">
    <div class="compute-menu__input">
      <div class="compute-menu__input-info">
        <p class="p">Вес посылки в кг.</p>
        <p class="p">Футболка: 1</p>
      </div>
      <input type="number" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.compute-menu {
  display: flex;

  &__input {
    width: 387px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;

    &-info {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
  }

  input {
    width: 387px;
    padding: 21px 20px;
  }
}
</style>
