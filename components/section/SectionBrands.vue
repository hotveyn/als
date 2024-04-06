<template>
  <div id="brands" class="brands">
    <div class="container brands__content">
      <h2 class="brands__title brands__title_desktop h2">
        вы можете заказать продукцию таких брендов как
      </h2>
      <h2 class="brands__title brands__title_mobile h2">бренды</h2>
      <div class="brands__logos">
        <img
          class="brands__logo"
          src="/images/brands/Adidas.png"
          alt="Adidas"
        />
        <img
          class="brands__logo"
          src="/images/brands/amazon.png"
          alt="amazond"
        />
        <img
          class="brands__logo"
          src="/images/brands/Armani.png"
          alt="armani"
        />
        <img
          class="brands__logo"
          src="/images/brands/Berska.png"
          alt="Berska"
        />
        <img class="brands__logo" src="/images/brands/Boss.png" alt="Boss" />
        <img
          class="brands__logo"
          src="/images/brands/Chanel.png"
          alt="Chanel"
        />
        <img
          class="brands__logo"
          src="/images/brands/Clinique.png"
          alt="Clinque"
        />
        <img class="brands__logo" src="/images/brands/DIOR.png" alt="DIOR" />
        <img
          class="brands__logo"
          src="/images/brands/Foot locker.png"
          alt="DIOR"
        />
        <img class="brands__logo" src="/images/brands/Guess.png" alt="Guess" />
        <img class="brands__logo" src="/images/brands/MAC.png" alt="MAC" />
        <img
          class="brands__logo"
          src="/images/brands/Michael Kors.png"
          alt="Kors"
        />
        <img class="brands__logo" src="/images/brands/Nike.png" alt="Nike" />
        <img class="brands__logo" src="/images/brands/TH.png" alt="TH" />
        <img
          class="brands__logo"
          src="/images/brands/Victorias Secret.png"
          alt="Secret"
        />
        <img class="brands__logo" src="/images/brands/ZARA.png" alt="ZARA" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brands {
  width: 100%;

  &__title {
    width: fit-content;
    margin: 0 auto;
  }

  &__logos {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-items: center;
    gap: 23px;
  }

  &__logo {
    width: adpval(100, 113);
    opacity: 0.6;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
}

@media screen and (min-width: 1401px) {
  .brands {
    &__title_mobile {
      display: none;
    }
  }
}

@media screen and (max-width: 1400px) {
  .brands {
    &__logos {
      grid-template-columns: repeat(4, 1fr);
    }

    &__title_mobile {
      display: block;
    }

    &__title_desktop {
      display: none;
    }
  }
}

@media screen and (max-width: 600px) {
  .brands {
    &__logos {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 400px) {
  .brands {
    &__logos {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
