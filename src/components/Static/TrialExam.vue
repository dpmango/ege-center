<template>
  <section class="exam" :class="className">
    <div class="container">
      <div class="row exam__wrapper">
        <div class="col col-6">
          <div class="exam__content">
            <h2 class="h2-title">
              Пройдите <span class="c-primary">пробный ЕГЭ</span> <br />в ЕГЭ-Центре
            </h2>

            <p class="p-regular">
              Каждый ученик ЕГЭ-Центра может пройти пробный ЕГЭ по любому предмету, полностью
              имитирующий настоящий ЕГЭ, и реально оценить свою готовность к экзамену.
            </p>
            <p class="p-regular">
              Также пробный ЕГЭ позволяет существенно снизить панику на настоящем ЕГЭ и в целом быть
              психологически более готовым.
            </p>

            <router-link to="course/1">
              <UiButton theme="accent" class="exam__cta">узнать подробнее</UiButton>
            </router-link>
          </div>
        </div>

        <div class="col col-6">
          <div class="exam__image">
            <img src="/static/img/static/textExam_decor.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.exam {
  margin: 200px 0 110px 0;
  &.mt-0 {
    margin-top: 0px;
  }
  &__wrapper {
    align-items: center;
  }
  &__content {
    h2 {
      line-height: 1.4;
    }
    p {
      margin-top: 40px;
      max-width: 460px;
      line-height: 1.9;
      + p {
        margin-top: 34px;
      }
    }
  }
  &__cta {
    margin-top: 48px;
  }
  &__image {
    text-align: center;
  }
}
</style>
