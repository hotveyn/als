<script setup lang="ts">
import BurgerMenuBase from "~/components/header/burgerMenuBase.vue";
const isActive = ref<boolean>(false);
const burgerButton = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <header class="header container">
    <div class="header__content">
      <div :class="{ hidden__logo: isActive }" class="logo">
        <img src="/images/baselogo.svg" alt="logo" />
      </div>
      <div class="header__desktop">
        <nav class="header__nav nav">
          <ul class="nav__list">
            <li class="nav__el">
              <a class="nav__link" href="#hero">Главная</a>
            </li>
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
      <div
        class="header__mobile"
        :class="{ 'header__mobile-one-active': isActive }"
      >
        <div class="header__mobile-one" :class="{ 'active-one': isActive }">
          <nav class="header__nav nav">
            <ul class="nav__list">
              <li class="nav__el">
                <a class="nav__link" href="#hero">Главная</a>
              </li>
              <li class="nav__el">
                <a class="nav__link" href="#hero">Акции</a>
              </li>
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
          <ButtonSecond class="header__mobile-button"
            >Сделать заказ</ButtonSecond
          >
        </div>
        <burger-menu-base :click-function="burgerButton" class="burger-menu" />
      </div>
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
    width: 100%;
    align-items: center;
  }
  &__desktop {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }
  &__mobile {
    display: none;
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
.burger-menu {
  justify-self: flex-end;
}
@media screen and (max-width: 1000px) {
  .header {
    height: 110px;
    &__desktop {
      display: none;
    }
    &__mobile {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      height: 65px;
      &-button {
        padding: 10px 20px;
      }
      &-one {
        padding-left: 20px;
        position: relative;
        z-index: 10;
        transform: translateY(-110px);
        transition: all 0.5s linear;
        display: grid;
        grid-template-columns: 2.7fr 1fr;
        align-items: center;
      }
    }
  }
  .active-one {
    transform: translateY(0px);
  }
  .logo {
    position: absolute;
    transition: 0.5s linear;
  }
  .hidden__logo {
    opacity: 0;
  }
}

@media screen and (max-width: 800px) {
  .hidden__logo {
    opacity: 1;
  }
  .header {
    &__mobile {
      &-one {
        grid-template-columns: 1fr;
        margin: 0 auto;
        gap: 40px 0;
        background: white;
        width: 100%;
        align-items: center;
        justify-items: center;
        padding: 0;
        transform: translateY(-189px);
        .nav__list {
          align-items: center;
          flex-direction: column;
        }
      }
      &-button {
        width: fit-content;
      }
    }
  }
  .burger-menu {
    position: absolute;
    right: 0;
    z-index: 200;
  }
  .active-one {
    transform: translateY(189px);
    z-index: 100;
  }
}
</style>
