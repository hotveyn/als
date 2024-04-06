<script setup lang="ts">
const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div class="baner">
    <div class="baner__picture">
      <img class="baner__img" src="/images/modal.png" alt="asd" />
    </div>
    <div class="baner__info">
      <h2 class="h2 baner__title">
        Приведи друга и получи скидку 5% на следующий заказ
      </h2>
      <p class="baner__description">
        Пригласи друга присоединиться к нашей крутой компании! Когда твой друг
        сделает свой первый заказ у нас и укажет, что он пришел по твоей
        рекомендации, вы оба получите скидку!
      </p>
      <p class="baner__if">Условия акции:</p>
      <ul class="baner__ul">
        <li class="baner__li">
          Скидка доступна после первого заказа Вашего друга.
        </li>
        <li class="baner__li">
          Не ограничено количество приглашений – приглашайте всех своих друзей!
        </li>
        <li class="baner__li">
          Скидка будет предоставлена только в случае, если друг укажет, что
          пришел по вашему приглашению при оформлении заказа.
        </li>
      </ul>
      <p class="baner__time">
        Время проведения акции:
        <span class="baner__time-number">Без срока</span>
      </p>
    </div>
    <img
      src="/images/close.svg"
      alt="close"
      class="baner__close"
      @click="emit('close')"
    />
  </div>
</template>

<style scoped lang="scss">
.baner {
  border-radius: 20px;
  border: 5px solid #efefef;
  position: relative;
  max-width: 800px;
  width: 100%;
  max-height: 750px;
  height: 100%;
  display: grid;
  grid-template-rows: 45% 55%;
  overflow: hidden;

  &__close {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &__time {
    margin-top: 20px;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #323232;

    &-number {
      font-weight: 500;
    }
  }

  &__ul {
    margin-top: 10px;
    list-style: inside;
    display: grid;
    gap: 5px;
  }

  &__li {
    font-weight: 500;
    font-size: adpval(12, 17, 800);
    line-height: adpval(14.5, 20, 800);
    color: #323232;

    &::marker {
      color: #00b94b;
    }
  }

  &__title {
    font-weight: 700;
    font-size: adpval(16, 24, 800);
    text-transform: unset;
    line-height: adpval(19, 29, 800);
    color: #000000cc;
  }

  &__description {
    margin-top: 10px;
    font-weight: 500;
    font-size: adpval(14, 20, 800);
    line-height: adpval(17, 24, 800);
  }

  &__if {
    margin-top: 20px;
    font-weight: 600;
    font-size: adpval(16, 17, 800);
    line-height: adpval(19, 24, 800);
    color: #323232;
  }

  &__info {
    padding: 20px 30px;
    background-color: white;
    // overflow-y: scroll;
  }

  &__picture {
    background-color: #e6eadc;
  }

  &__img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
