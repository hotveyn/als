<script setup lang="ts">
const { data: euro } = useFetch("/api/euro");
const { data: socials } = useFetch("/api/socials");
</script>

<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__first">
        <img src="/images/baselogo.svg" alt="logo" />
        <p class="footer__curse">
          1€ = {{ new Intl.NumberFormat("ru-Ru").format(euro || 0) }}₽
        </p>
        <p class="footer__license">2024@ALS</p>
      </div>
      <div class="footer__second">
        <p class="footer__menu">Меню</p>
        <nav class="footer__nav ft-nav">
          <ul class="ft-nav__list">
            <li class="ft-nav__el">
              <a href="#" class="ft-nav__link">Бренды</a>
            </li>
            <li class="ft-nav__el">
              <a href="#" class="ft-nav__link">Акции</a>
            </li>
            <li class="ft-nav__el">
              <a href="#" class="ft-nav__link">Преимущества </a>
            </li>
            <li class="ft-nav__el">
              <a href="#" class="ft-nav__link">Товары</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__second">
        <p class="footer__menu">Контакты</p>
        <nav class="footer__nav ft-nav">
          <ul class="ft-nav__list">
            <li class="ft-nav__el">
              <a href="mail:example@mail.com" class="ft-nav__link"
                >Почта: {{ socials!.email }}</a
              >
            </li>
            <li class="ft-nav__el">
              <a :href="`tel:${socials?.phone}`" class="ft-nav__link"
                >Телефон: {{ socials?.phone }}</a
              >
            </li>
            <li class="ft-nav__el">
              <div class="footer__socials">
                <a :href="socials?.vk">
                  <img src="/icons/social/vk.svg" alt="vk" />
                </a>
                <a :href="socials?.telegram">
                  <img src="/icons/social/telegram.svg" alt="telegran" />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 100px;
  padding: 40px 0;
  box-shadow: 2.5px 0 3.5px 0 rgba(0, 55, 0, 0.15);

  &__content {
    display: flex;
    gap: 110px;
    flex-wrap: wrap;
  }

  &__license {
    color: black;
    font-weight: 600;
    font-size: 20px;
  }

  &__menu {
    font-weight: 600;
    font-size: 24px;
    line-height: 29.26px;
  }

  &__nav {
    margin-top: 20px;
  }

  &__socials {
    display: flex;
    gap: 5px;
  }

  &__first {
    display: grid;
    gap: 20px;
  }
  &__curse {
    padding: 10px 15px;
    border-radius: 50px;
    border: 3px solid $green;
    font-weight: 600;
    height: fit-content;
    font-size: 20px;
    line-height: 24.38px;
    width: fit-content;
  }
}

.ft-nav {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__link {
    color: #000000cc;
    font-weight: 600;
    font-size: adpval(16, 20);
  }
}
@media screen and (max-width: 500px) {
  .footer {
    &__content {
      max-width: 280px;
      gap: 20px;
    }
  }
}
</style>
