<template>
  <div class="works">
    <div class="works__content container">
      <h2 class="h2">Как мы работаем</h2>
      <div class="works__works">
        <div class="works__work work">
          <img class="work__ico" src="/icons/works/1.svg" alt="work" />
          <p class="work__text">1 Обрабатываем заказ</p>
          <img src="/icons/works/arr.svg" alt="arrow" class="work__arr" />
        </div>
        <div class="works__work work">
          <img class="work__ico" src="/icons/works/2.svg" alt="work" />
          <p class="work__text">2 Оплачиваем и покупаем</p>
          <img src="/icons/works/arr.svg" alt="arrow" class="work__arr" />
        </div>
        <div class="works__work work">
          <img class="work__ico" src="/icons/works/3.svg" alt="work" />
          <p class="work__text">3 Доставляем на склад</p>
          <img src="/icons/works/arr.svg" alt="arrow" class="work__arr" />
        </div>
        <div class="works__work work">
          <img class="work__ico" src="/icons/works/4.svg" alt="work" />
          <p class="work__text">4 Проверяем</p>
          <img src="/icons/works/arr.svg" alt="arrow" class="work__arr" />
        </div>
        <div class="works__work work">
          <img class="work__ico" src="/icons/works/5.svg" alt="work" />
          <p class="work__text">5 Отпраляем в РФ</p>
          <img src="/icons/works/arr.svg" alt="arrow" class="work__arr" />
        </div>
        <div class="works__work work">
          <img class="work__ico" src="/icons/works/6.svg" alt="work" />
          <p class="work__text">6 Получение вами</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.works {
  &__works {
    margin-top: 40px;
    display: grid;
    row-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }
}

.work {
  display: grid;
  gap: 10px;
  grid-template-columns: 80px 290px 2px;
  align-items: center;

  &__text {
    font-size: 24px;
    font-weight: 600;
    line-height: 29.26px;
  }

  &__arr {
    margin-left: 70px;
  }
}
</style>
