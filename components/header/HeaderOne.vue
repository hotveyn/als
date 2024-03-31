<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="container header__content">
      <div class="logo"><img src="/images/baselogo.svg" alt="logo" /></div>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__el"><a class="nav__link" href="#hero">Главная</a></li>
          <li class="nav__el"><a class="nav__link" href="#hero">Акции</a></li>
          <li class="nav__el">
            <a class="nav__link" href="#brands">Бренды</a>
          </li>
          <li class="nav__el">
            <a class="nav__link" href="#catalog">Товары</a>
          </li>
          <li class="nav__el">
            <a class="nav__link" href="#why-we-are">Преимущества</a>
          </li>
        </ul>
      </nav>
      <ButtonSecond>Сделать заказ</ButtonSecond>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 22px 0;
  border-bottom: 1px solid rgba(0, 55, 0, 0.2);
  box-shadow: 0 2px 3.5px 0 rgba(0, 55, 0, 0.15);
  background-color: white;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav {
  &__list {
    display: flex;
    gap: 25px;
  }

  &__link {
    color: black;
    font-weight: 600;
  }
}
</style>
