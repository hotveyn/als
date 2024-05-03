<template>
  <section id="why-we-are" class="why">
    <div class="container why__content">
      <h2 class="why__h2 h2">Почему именно мы?</h2>
      <div class="why__whys">
        <div class="why__why card-why">
          <img src="/images/whys/bxs_offer.svg" alt="1" class="card-why__img" />
          <h3 class="h3 card-why__h3">Поиск лучшего предложения</h3>
          <p class="p card-why__p">
            Мы подберем для вас товар по лучшей цене и высшего качества.
          </p>
        </div>
        <div class="why__why card-why">
          <img
            src="/images/whys/bxs_offer-1.svg"
            alt="1"
            class="card-why__img"
          />
          <h3 class="h3 card-why__h3">Быстрая и безопасная оплата</h3>
          <p class="p card-why__p">
            Оплачивайте ваши покупки российскими картами Мир, Visa, Mastercard.
          </p>
        </div>
        <div class="why__why card-why">
          <img
            src="/images/whys/iconamoon_delivery-fast-fill.svg"
            alt="1"
            class="card-why__img"
          />
          <h3 class="h3 card-why__h3">Доставка по всей России</h3>
          <p class="p card-why__p">
            Доставим товар в отделение почты или курьером до двери.
          </p>
        </div>
        <div class="why__why card-why">
          <img
            src="/images/whys/material-symbols_contact-support-rounded.svg"
            alt="1"
            class="card-why__img"
          />
          <h3 class="h3 card-why__h3">Поддержка пользователей</h3>
          <p class="p card-why__p">
            Вы можете связаться с нами по всем интересующим вас вопросам.
          </p>
        </div>
        <div class="why__why card-why">
          <img
            src="/images/whys/solar_delivery-bold.svg"
            alt="1"
            class="card-why__img"
          />
          <h3 class="h3 card-why__h3">Налаженная логистика</h3>
          <p class="p card-why__p">
            У нас несколько складов на территории Европы, а также склады наших
            партнеров для получения вашего заказа.
          </p>
        </div>
        <div class="why__why card-why">
          <img
            src="/images/whys/solar_document-add-bold.svg"
            alt="1"
            class="card-why__img"
          />
          <h3 class="h3 card-why__h3">Таможенное оформление</h3>
          <p class="p card-why__p">
            Без декларации и сканов паспорта на посылки до 200 €.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.why {
  width: 100%;

  &__h2 {
    margin: 0 auto;
    width: fit-content;
    text-align: center;
  }

  &__whys {
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
.card-why {
  width: 100%;
  min-height: 263px;

  &__img {
    display: block;
  }

  * {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
  }

  &__h3 {
    margin-top: 15px;
  }

  &__p {
    margin-top: 10px;
  }
}
@media screen and (max-width: 880px) {
  .why {
    &__whys {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media screen and (max-width: 450px) {
  .why {
    &__whys {
      grid-template-columns: 1fr;
    }
  }
}
</style>
