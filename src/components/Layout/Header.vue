<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <img src="@/assets/images/layout/logo.svg" alt="site logo" />
          <span>ЕГЭ Центр</span>
        </div>
        <div class="header__subtitle">
          Сеть центров по подготовке школьников 9-11 класса к ОГЭ и ЕГЭ
        </div>

        <div class="header__cta">
          <div class="header__cta-contacts">
            <a class="header__phone" href="tel:+74956468592"> +7 (495) 646-85-92 </a>
            <div class="header__times">Пн-сб 10:00-19:00</div>
          </div>

          <div class="header__cta-action">
            <UiButton theme="outline" outline>Записаться на курсы</UiButton>
          </div>
        </div>
      </div>

      <div class="header__menu">
        <ul class="header__menu-list">
          <li v-for="(menuElement, idx) in menu" :key="idx">
            <router-link :to="menuElement.to">
              {{ menuElement.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { to: "/", label: "Курсы" },
        { to: "/", label: "Школа-экстернат" },
        { to: "/", label: "Преподаватели" },
        { to: "/", label: "Вопрос-ответ" },
        { to: "/", label: "Документы" },
        { to: "/", label: "Стоимость" },
        { to: "/", label: "Адреса" },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    padding: 34px 0 24px;
  }
  &__logo {
    flex: 0 0 auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
    font-size: 0;
    img {
      max-width: 49px;
      margin-right: 12px;
    }
    span {
      font-weight: 500;
      font-size: 24px;
      line-height: (27 / 24);
      color: #000000;
    }
  }
  &__subtitle {
    flex: 0 0 auto;
    position: relative;
    max-width: 260px;
    padding-left: 23px;
    font-size: 14px;
    color: $colorLight;
    &::before {
      display: inline-block;
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 1px;
      background: $borderColor;
    }
  }

  &__cta {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__cta-contacts {
    margin-right: 44px;
    text-align: right;
  }

  &__phone {
    display: inline-block;
    font-weight: 900;
    padding: 5px 0;
    transition: color 0.25s $ease;
    &:hover {
      color: $colorPrimary;
    }
  }
  &__times {
    font-size: 14px;
    color: $colorLight;
  }

  &__menu {
    position: relative;
    padding: 16px 0 26px;
  }

  &__menu-list {
    list-style: none;
    display: flex;
    margin: 0 -18px;
    li {
      flex: 0 0 auto;
      margin-right: 12px;
    }
    a {
      position: relative;
      display: inline-block;
      font-weight: 500;
      font-size: 20px;
      padding: 12px 18px;
      border-radius: 35px;
      color: $colorGray;
      transition: color 0.25s $ease;
      &::after {
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(254, 138, 30, 0.2);
        border-radius: 35px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.25s $ease;
      }
      &:hover {
        color: $fontColor;
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
