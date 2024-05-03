<script setup lang="ts">
import BurgerMenuBase from "~/components/header/burgerMenuBase.vue";
import { useWindowSize } from "@vueuse/core";
const isActive = ref<boolean>(false);
const burgerButton = () => {
  isActive.value = !isActive.value;
  document.body.style.overflowY = isActive.value ? "hidden" : "auto";
};
const userView = useWindowSize();
const { data: vk } = useFetch("/api/socials/vk");
</script>

<template>
  <header class="header">
    <div class="header__content container">
      <div :class="{ hidden__logo: isActive }" class="logo">
        <img src="/images/baselogo.svg" alt="logo" />
      </div>
      <div class="header__desktop">
        <nav class="header__nav nav">
          <ul class="nav__list">
            <li class="nav__el">
              <a class="nav__link" href="#hero">Главная</a>
            </li>
            <!-- <li class="nav__el"><a class="nav__link" href="#hero">Акции</a></li> -->
            <li class="nav__el">
              <a class="nav__link" href="#brands">Бренды</a>
            </li>
            <li class="nav__el">
              <a
                class="nav__link"
                :href="userView.width.value > 700 ? '#catalog' : '#hero'"
                >Товары</a
              >
            </li>
            <li class="nav__el">
              <a class="nav__link" href="#why-we-are">Преимущества</a>
            </li>
          </ul>
        </nav>
        <ButtonSecond :link="vk?.value">Сделать заказ</ButtonSecond>
      </div>
      <div
        class="header__mobile"
        :class="{ 'header__mobile-one-active': isActive }"
      >
        <div class="header__mobile-one" :class="{ 'active-one': isActive }">
          <teleport to="body">
            <Transition>
              <div v-if="isActive" class="header__mobile-one__content">
                <nav class="header__nav nav">
                  <ul class="nav__list">
                    <li class="nav__el">
                      <a class="nav__link" href="#hero" @click="burgerButton"
                        >Главная</a
                      >
                    </li>
                    <!-- <li class="nav__el">
                      <a class="nav__link" href="#hero" @click="burgerButton"
                        >Акции</a
                      >
                    </li> -->
                    <li class="nav__el">
                      <a class="nav__link" href="#brands" @click="burgerButton"
                        >Бренды</a
                      >
                    </li>
                    <li class="nav__el">
                      <a class="nav__link" href="#catalog" @click="burgerButton"
                        >Товары</a
                      >
                    </li>
                    <li class="nav__el">
                      <a
                        class="nav__link"
                        href="#why-we-are"
                        @click="burgerButton"
                        >Преимущества</a
                      >
                    </li>
                  </ul>
                </nav>
                <ButtonSecond class="header__mobile-button"
                  >Сделать заказ</ButtonSecond
                >
              </div>
            </Transition>
          </teleport>
        </div>
        <burger-menu-base
          :click-function="burgerButton"
          class="burger-menu"
          :is-active="isActive"
        />
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
    display: grid;
    grid-template-columns: 1fr 7fr;
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
  margin-left: 10px;
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
    &__content {
      grid-template-columns: 1fr;
    }
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
        font-size: 18px;
      }
      &-one {
        opacity: 0;
        transition: all 0.2s linear;
        display: grid;
        grid-template-columns: 3fr 1fr;
        align-items: center;
        &__content {
          position: absolute;
          z-index: 100;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 110px;
          width: 90%;
        }
      }
    }
  }
  .active-one {
    opacity: 1;
  }
  .logo {
    position: absolute;
    transition: 0.2s linear;
  }
  .hidden__logo {
    opacity: 0;
  }
}

@media screen and (max-width: 800px) {
  .nav {
    margin-left: unset;
  }
  .hidden__logo {
    opacity: 1;
  }
  .header {
    &__mobile {
      &-one {
        display: none;
        flex-direction: column;
        margin: 0 auto;
        gap: 40px 0;
        background: white;
        width: calc(100vw + 5px);
        align-items: center;
        justify-content: center;
        padding: 0;
        top: 0;
        left: -5px;
        height: 100vh;
        position: fixed;
        opacity: 0;
        &__content {
          flex-direction: column;
          height: fit-content;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          gap: 20px;
          .nav__list {
            align-items: center;
            flex-direction: column;
          }
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
    z-index: 1001;
  }
  .active-one {
    display: flex;
    opacity: 1;
    z-index: 1000;
  }
}
</style>
