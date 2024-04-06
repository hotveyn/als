<script setup lang="ts"></script>
<template>
  <section id="how" class="how">
    <div class="container how__content">
      <div class="how__left">
        <h2 class="h2 how__title">Как сделать заказ</h2>
        <div class="how__information">
          <div class="how__part">
            <h3 class="h3 how__sub-title">1. Выберите товар:</h3>
            <p class="p how__text">
              Используя ссылки на нашем сайте в блоке бренды, вы можете выбрать
              необходимый товар. Просто перейдите по ссылке на интересующий вас
              бренд и выберите желаемый товар из ассортимента или из сторонних
              магазинов.
            </p>
          </div>
          <div class="how__part">
            <h3 class="h3 how__sub-title">2. Отправьте запрос:</h3>
            <p class="p how__text">
              После выбора товара отправьте нам запрос. Свяжитесь с нами по
              указанным контактным данным для оформления заказа или через нашу
              страницу во ВКонтакте.
            </p>
          </div>
          <div class="how__part">
            <h3 class="h3 how__sub-title">3. Мы вам поможем определиться:</h3>
            <p class="p how__text">
              Наши специалисты с удовольствием проконсультируют вас по всем
              вопросам, касающимся товара, его характеристик, цен и условий
              доставки. Свяжитесь с нами, и мы поможем вам сделать правильный
              выбор!
            </p>
          </div>
          <p class="how__comission">
            *комиссия за работу - 10% но не менее 15€
          </p>
        </div>
      </div>
      <div class="how__right">
        <img src="/images/how.png" alt="bring a freind" class="how__img" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.how {
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: adpval(15, 60);
    border: 5px solid $green;
    border-radius: 28px;
    padding: adpval(40, 60, 1620, 750);
  }

  &__img {
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
    width: 100%;
  }

  &__information {
    margin-top: adpval(15, 40);
    display: flex;
    justify-content: center;
    gap: adpval(10, 30);
    flex-direction: column;
  }

  &__text {
    margin-top: 10px;
  }

  &__comission {
    margin-top: 20px;
    font-weight: 500;
    color: #000000cc;
    font-size: adpval(14, 20);
    text-transform: uppercase;
  }
}

@media screen and (max-width: 1000px) {
  .how {
    &__content {
      grid-template-columns: 1fr;
    }
  }
}

@media screen and (max-width: 700px) {
  .how {
    &__content {
      border: 0;
      padding: 0;
    }
  }
}
</style>
