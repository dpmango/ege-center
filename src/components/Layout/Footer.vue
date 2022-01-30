<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__logo">
          <svg
            width="49"
            height="36"
            viewBox="0 0 49 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49 8.18115C49 8.18115 41.5 8.18116 36.5 9C31.5 9.81884 26 13 26 13V36C26 36 30.9897 33.3827 35 33.5C38.6349 33.6063 42 36 42.5 36C43 36 49 8.18115 49 8.18115Z"
              fill="#BEAC83"
            />
            <path
              d="M0 8.18115C0 8.18115 7.5 8.18116 12.5 9C17.5 9.81884 23 13 23 13V36C23 36 18.0103 33.3827 14 33.5C10.3651 33.6063 7 36 6.5 36C6 36 0 8.18115 0 8.18115Z"
              fill="#FFC423"
            />
            <path
              d="M42.5 0.54C42.5 0.54 38.5 -0.96 33.5 1.04C28.5 3.04 25 8.53998 25 8.53998V11C25 11 28 8.5 33.5 7C39 5.5 42.5 5.5 42.5 5.5V0.54Z"
              fill="#916F5D"
            />
            <path
              d="M6.5 0.54C6.5 0.54 10.5 -0.96 15.5 1.04C20.5 3.04 24 8.53998 24 8.53998V11C24 11 21 8.5 15.5 7C10 5.5 6.5 5.5 6.5 5.5V0.54Z"
              fill="#FE8A1E"
            />
          </svg>
          <span>ЕГЭ Центр</span>
        </div>
        <div class="footer__subtitle">
          Сеть центров по подготовке школьников 9-11 класса к ОГЭ и ЕГЭ
        </div>
      </div>

      <div class="footer__grid">
        <!-- col -->
        <div class="footer__col --primary">
          <div class="footer__mainSection">
            <label class="footer__label">Главный корпус</label>
            <p>
              ЕГЭ-Центр Тургеневская <br />
              г. Москва, ул. Мясницкая, д. 40, стр. 1
            </p>
          </div>
          <div class="footer__mainSection">
            <label class="footer__label">График работы администрации</label>
            <p>Ежедневно с 10:00 до 19:00</p>
          </div>
          <div class="footer__mainSection">
            <label class="footer__label">Телефон учебной части</label>
            <p>
              <a href="+7 (495) 646-85-92">+7 (495) 646-85-92</a>
            </p>
          </div>
          <div class="footer__mainSection">
            <p><a href="#">Посмотреть другие адреса</a></p>
          </div>
        </div>

        <!-- col -->
        <div class="footer__col">
          <div class="footer__menu">
            <label class="footer__label">Популярные курсы</label>
            <ul class="footer__menu-list">
              <li v-for="(menuElement, idx) in courses" :key="idx">
                <router-link :to="menuElement.to">
                  {{ menuElement.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- col -->
        <div class="footer__col">
          <div class="footer__menu">
            <label class="footer__label">Реквизиты</label>
            <p>ОГРН 1167746382319</p>
            <p><a href="#">Лицензия №037742</a></p>
          </div>
        </div>

        <!-- col -->
        <div class="footer__col">
          <div class="footer__menu">
            <label class="footer__label">Дополнительно</label>
            <ul class="footer__menu-list">
              <li v-for="(menuElement, idx) in addons" :key="idx">
                <router-link :to="menuElement.to">
                  {{ menuElement.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <span class="footer__copy">© ЕГЭ-Центр, 2015-2021</span>
        <a class="footer__policy" href="/policy.pdf" target="_blank">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        { to: "/course/1", label: "Курсы ЕГЭ по математике" },
        { to: "/course/2", label: "Курсы ЕГЭ по физике" },
        { to: "/course/3", label: "Курсы ЕГЭ по химии" },
        { to: "/course/4", label: "Курсы ЕГЭ по биологии" },
        { to: "/course/5", label: "Курсы ЕГЭ по информатике" },
        { to: "/course/6", label: "Курсы ЕГЭ по истории" },
        { to: "/course/7", label: "Курсы ЕГЭ по обществознанию" },
        { to: "/course/8", label: "Курсы ЕГЭ по английскому языку" },
        { to: "/course/9", label: "Курсы ЕГЭ по русскому языку" },
        { to: "/course/10", label: "Курсы ЕГЭ по литературе" },
      ],
      addons: [
        { to: "/", label: "Вакансии для преподавателей" },
        { to: "/", label: "Пробный ЕГЭ" },
        { to: "/", label: "Личный кабинет (для родителей) " },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 72px 0 50px;
  background: $colorBg;
  &__top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
  }
  &__logo {
    flex: 0 0 auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
    font-size: 0;
    img,
    svg {
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

  &__grid {
    margin-top: 58px;
    display: grid;
    grid-template-columns: 328px 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  &__col {
    display: flex;
    justify-content: center;
    &.--primary {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__label {
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
    color: $colorLight;
  }
  &__mainSection {
    margin-bottom: 24px;
    .footer__label {
      margin-bottom: 8px;
    }
  }
  &__menu-list {
    list-style: none;
    display: block;
    margin: 0;
    li {
      flex: 0 0 auto;
      margin-bottom: 3px;
    }
    a {
      position: relative;
      display: inline-block;
      font-size: 16px;
      padding: 2px 0px;
      border-radius: 35px;
      color: $colorGray;
      transition: color 0.25s $ease;
      &:hover {
        color: $colorPrimary;
      }
    }
  }
  &__bottom {
    margin-top: 75px;
    display: flex;
    align-items: center;
  }
  &__copy {
    font-size: 14px;
    color: $colorLight;
  }
  &__policy {
    display: block;
    margin-left: auto;
    font-size: 14px;
    color: $colorLight;
    text-decoration: underline;
    transition: color 0.25s $ease;
    &:hover {
      text-decoration: none;
      color: $fontColor;
    }
  }
}
</style>
