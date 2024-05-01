<template>
  <section id="brands" class="brands">
    <div class="container brands__content">
      <h2 class="brands__title brands__title_desktop h2">
        вы можете заказать продукцию таких брендов как
      </h2>
      <h2 class="brands__title brands__title_mobile h2">бренды</h2>
      <div class="brands__logos">
        <a href="https://adidas.com">
          <img
            class="brands__logo"
            src="/images/brands/Adidas.png"
            alt="Adidas"
          />
        </a>
        <a href="https://amazon.com">
          <img
            class="brands__logo"
            src="/images/brands/amazon.png"
            alt="amazond"
          />
        </a>
        <a href="https://armani.com">
          <img
            class="brands__logo"
            src="/images/brands/Armani.png"
            alt="armani"
          />
        </a>
        <a href="https://bershka.com">
          <img
            class="brands__logo"
            src="/images/brands/Berska.png"
            alt="Berska"
          />
        </a>
        <a href="https://hugoboss.com">
          <img class="brands__logo" src="/images/brands/Boss.png" alt="Boss" />
        </a>
        <a href="https://chanel.com">
          <img
            class="brands__logo"
            src="/images/brands/Chanel.png"
            alt="Chanel"
          />
        </a>
        <a href="https://clinique.com">
          <img
            class="brands__logo"
            src="/images/brands/Clinique.png"
            alt="Clinque"
          />
        </a>
        <a href="https://dior.com">
          <img class="brands__logo" src="/images/brands/DIOR.png" alt="DIOR" />
        </a>
        <a href="https://footlocker.com">
          <img
            class="brands__logo"
            src="/images/brands/Foot locker.png"
            alt="DIOR"
          />
        </a>
        <a href="https://guess.eu">
          <img
            class="brands__logo"
            src="/images/brands/Guess.png"
            alt="Guess"
          />
        </a>
        <a href="https://maccosmetics.com">
          <img class="brands__logo" src="/images/brands/MAC.png" alt="MAC" />
        </a>
        <a href="https://michaelkors.com">
          <img
            class="brands__logo"
            src="/images/brands/Michael Kors.png"
            alt="Kors"
          />
        </a>
        <a href="https://nike.com">
          <img class="brands__logo" src="/images/brands/Nike.png" alt="Nike" />
        </a>
        <a href="https://tommy.com">
          <img class="brands__logo" src="/images/brands/TH.png" alt="TH" />
        </a>
        <a href="https://victoriassecret.com">
          <img
            class="brands__logo"
            src="/images/brands/Victorias Secret.png"
            alt="Secret"
          />
        </a>
        <a href="https://zara.com">
          <img class="brands__logo" src="/images/brands/ZARA.png" alt="ZARA" />
        </a>
      </div>
    </div>
  </section>
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
