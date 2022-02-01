<template>
  <header class="header" :class="[scroll.scrolled && '--scrolled', scroll.direction]">
    <div class="header__wrapper" @click="() => handleMouseEnter(null)">
      <div class="container">
        <div class="header__top">
          <router-link to="/" class="header__logo">
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
          </router-link>
          <div class="header__subtitle">
            Сеть центров по подготовке школьников 9-11 класса к ОГЭ и ЕГЭ
          </div>

          <div class="header__cta">
            <div class="header__cta-contacts">
              <a class="header__phone" href="tel:+74956468592"> +7 (495) 646-85-92 </a>
              <div class="header__times">Пн-сб 10:00-19:00</div>
            </div>

            <div class="header__cta-action">
              <UiButton theme="outline" outline @click="() => setModal('signup')">
                Записаться на курсы
              </UiButton>
            </div>
          </div>
        </div>

        <div class="header__menu">
          <div class="container">
            <ul class="header__menu-list" @click.stop.prevent>
              <li v-for="(menuElement, idx) in menu" :key="idx">
                <a
                  href="#"
                  :class="[activeSubmenu === menuElement.submenu && 'is-active']"
                  v-if="menuElement.submenu && activeSubmenu !== menuElement.submenu"
                  @click="() => handleMouseEnter(menuElement.submenu)"
                >
                  {{ menuElement.label }}
                </a>
                <router-link
                  v-else
                  :to="menuElement.to"
                  :class="[activeSubmenu === menuElement.submenu && 'is-active']"
                  @click="() => handleMouseEnter(null)"
                >
                  {{ menuElement.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- submenu -->
    <div
      class="submenu"
      :class="activeSubmenu === 1 && 'is-active'"
      v-scroll-lock="activeSubmenu === 1"
    >
      <div class="container">
        <div class="submenu__grid">
          <div class="submenu__col" v-for="(menu, idx) in submenu" :key="idx">
            <div class="submenu__title">{{ menu.title }}</div>
            <ul class="submenu__list">
              <li v-for="(link, idx) in menu.list" :key="idx">
                <a :href="link.to">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="header__overlay"
      :class="activeSubmenu && 'is-active'"
      @click="() => handleMouseEnter(null)"
    ></div>
  </header>
</template>

<script>
import throttle from "lodash/throttle"
import { mapMutations } from "vuex"

export default {
  data() {
    return {
      activeSubmenu: null,
      scroll: {
        scrolled: false,
        lastScroll: 0,
        direction: "down",
      },
      menu: [
        { to: "/courses", label: "Курсы", submenu: 1 },
        { to: "/school", label: "Школа-экстернат" },
        { to: "/teachers", label: "Преподаватели" },
        { to: "/faq", label: "Вопрос-ответ" },
        { to: "/docs", label: "Документы" },
        { to: "/price", label: "Стоимость" },
        { to: "/contact", label: "Адреса" },
      ],
      submenu: [
        {
          title: "Курсы ЕГЭ для 11 класса",
          list: [
            { to: "/course/1", label: "Математика" },
            { to: "/course/1", label: "Физика" },
            { to: "/course/1", label: "Химия" },
            { to: "/course/1", label: "Биология" },
            { to: "/course/1", label: "История" },
            { to: "/course/1", label: "Обществознание" },
            { to: "/course/1", label: "Русский язык" },
            { to: "/course/1", label: "Литература" },
            { to: "/course/1", label: "Информатика" },
            { to: "/course/1", label: "Английский язык" },
            { to: "/course/1", label: "Итоговое сочинение" },
          ],
        },
        {
          title: "Курсы ЕГЭ для 10 класса",
          list: [
            { to: "/course/1", label: "Математика" },
            { to: "/course/1", label: "Физика" },
            { to: "/course/1", label: "Химия" },
            { to: "/course/1", label: "Биология" },
            { to: "/course/1", label: "История" },
            { to: "/course/1", label: "Обществознание" },
            { to: "/course/1", label: "Русский язык" },
            { to: "/course/1", label: "Английский язык" },
          ],
        },
        {
          title: "Курсы ОГЭ для 9 класса",
          list: [
            { to: "/course/1", label: "Математика" },
            { to: "/course/1", label: "Физика" },
            { to: "/course/1", label: "Химия" },
            { to: "/course/1", label: "Биология" },
            { to: "/course/1", label: "История" },
            { to: "/course/1", label: "Обществознание" },
            { to: "/course/1", label: "Русский язык" },
            { to: "/course/1", label: "Английский язык" },
          ],
        },
        {
          title: "Другое",
          list: [
            { to: "/study-plans", label: "Учебные планы" },
            { to: "/", label: "Пробный ЕГЭ" },
          ],
        },
      ],
    }
  },
  // created() {
  //   this.scrollWithThrottle = throttle(this.onScroll, 200)
  // },
  // mounted() {
  //   window.addEventListener("scroll", this.scrollWithThrottle, false)
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.scrollWithThrottle, false)
  // },
  computed: {
    // ...mapState("ui", ["activeModal"]),
  },
  methods: {
    onScroll() {
      const scrollY = window.scrollY

      this.scroll.scrolled = scrollY > 0

      if (this.scroll.lastScroll > scrollY) {
        this.scroll.direction = "up"
      } else {
        this.scroll.direction = "down"
      }

      this.scroll.lastScroll = scrollY
    },
    handleMouseEnter(id) {
      if (id) {
        // document.body.classList.add("body-lock")
        this.activeSubmenu = id
      } else {
        // document.body.classList.remove("body-lock")
        this.activeSubmenu = null
      }
    },
    ...mapMutations("ui", ["setModal"]),
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  min-width: 1240px;
  will-change: transform;
  // backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transition: transform 0.25s $ease;
  &__wrapper {
    position: relative;
    z-index: 3;
    background: white;
    padding-bottom: 104px;
    will-change: padding;
    transition: padding 0.25s $ease;
    // backface-visibility: hidden;
  }
  &__top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 30px 0 10px;
    background: white;
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
      transition: color 0.25s $ease;
    }

    &:hover {
      span {
        color: $colorPrimary;
      }
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
    padding: 3px 0;
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 26px 0 24px;
    transition: transform 0.25s $ease, padding 0.25s $ease, opacity 0.15s ease-out;
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
      &.router-link-exact-active,
      &.is-active {
        color: $fontColor;
        &::after {
          opacity: 1;
        }
      }
    }
  }
  &__overlay {
    position: fixed;
    z-index: 1;
    top: 195px;
    left: 0;
    right: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s $ease;
    &.is-active {
      opacity: 1;
      pointer-events: all;
    }
  }
  // &.--scrolled {
  //   position: fixed;
  //   transform: translate(0, -20px);
  //   border-bottom: 1px solid $borderColor;
  //   .header__wrapper {
  //     padding-bottom: 0;
  //   }
  //   .header__menu {
  //     opacity: 0;
  //     transform: translateY(-100%);
  //   }
  //   &.up {
  //     .header__wrapper {
  //       padding-bottom: 74px;
  //     }

  //     .header__menu {
  //       transform: none;
  //       padding-bottom: 10px;
  //       padding-top: 10px;
  //       opacity: 1;
  //     }
  //   }
  // }
}

.submenu {
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: 16px 0;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.15);
  will-change: transform;
  backface-visibility: hidden;
  opacity: 0;
  pointer-events: none;
  // transition: opacity 0.25s $ease;
  &.is-active {
    opacity: 1;
    pointer-events: all;
  }
  &__grid {
    display: flex;
  }
  &__col {
    flex: 0 1 278px;
    padding-right: 30px;
  }
  &__title {
    font-weight: 500;
    font-size: 14px;
  }
  &__list {
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li {
      display: block;
      font-size: 14px;
      margin-bottom: 5px;
    }
    a {
      color: $colorGray;
      transition: color 0.25s $ease;
      &:hover {
        color: $colorPrimary;
      }
    }
  }
}
</style>
