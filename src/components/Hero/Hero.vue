<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__content-wrapper">
        <h1 class="hero__title h1-title">
          Курсы ЕГЭ по <span class="c-primary">обществознанию</span> для 11 класса
        </h1>

        <p class="hero__subtitle" color="gray">90+ баллов набирает наш каждый второй выпускник</p>

        <div class="hero__actions">
          <UiButton size="big">Записаться на курсы</UiButton>
          <div class="hero__start">
            <div class="hero__start-icon">
              <SvgIcon name="play" />
            </div>
            <div class="hero__start-content">
              <p class="c-light">Начало занятий</p>
              <p class="hero__start-date">22 ноября 2021 г.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero__image">
      <div class="hero__image-scaler">
        <img src="static/hero_course.jpg" srcset="static/hero_course@2x.jpg 2x" alt="Hero image" />
        <div class="hero__image-caption">
          <h5 class="h5-title">Тюрин Дмитрий Александрович</h5>
          <p>
            Преподаватель обществознания.
            <br />
            Автор методических разработок в области преподавания. Магистр социально- экономического
            образования
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  position: relative;
  overflow: hidden;
  background: $colorBg;
  &__content {
    flex: 0 0 50%;
    padding: 40px 60px 70px calc((100vw - 1280px) / 2 + 32px);
    height: calc(100vh - 190px);
    min-height: 440px;
    max-height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  &__content-wrapper {
    max-width: 520px;
  }

  &__subtitle {
    margin-top: 26px;
    color: $colorGray;
  }

  &__actions {
    margin-top: 56px;
    margin-bottom: -24px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    button {
      margin-right: 42px;
      margin-bottom: 24px;
    }
  }

  &__start {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  &__start-icon {
    flex: 0 0 auto;
    width: 52px;
    height: 52px;
    margin-right: 16px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $colorGreenMint;
    box-shadow: -4px 15px 20px -8px rgba(98, 154, 133, 0.12);
    .svg-icon {
      color: $colorGreen;
      font-size: 16px;
    }
  }
  &__start-content {
    flex: 0 0 auto;
    span {
      font-size: 18px;
    }
  }
  &__start-date {
    margin-top: 4px;
    font-weight: 500;
    font-size: 18px;
    color: $colorGray;
  }

  &__image {
    flex: 0 0 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  &__image-scaler {
    flex: 1 0 auto;
    max-width: 780px;
    position: relative;
    img,
    picture {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  &__image-caption {
    position: absolute;
    z-index: 2;
    bottom: 70px;
    left: 65px;
    padding: 28px 32px 32px 40px;
    max-width: 360px;
    background: #ffffff;
    box-shadow: 1px 31px 50px -17px rgba(67, 70, 213, 0.1);
    border-radius: 30px;
    h5 {
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      color: $colorGray;
    }
  }
}

@include r(1280) {
  .hero {
    &__content {
      padding-left: 32px;
    }
  }
}
</style>
