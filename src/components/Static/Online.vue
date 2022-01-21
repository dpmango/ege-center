<template>
  <section class="online">
    <div class="container">
      <div class="online__row row">
        <div class="col col-6">
          <div class="online__image">
            <img src="/static/img/static/online.svg" alt="" />
          </div>
        </div>

        <div class="col col-6">
          <div class="online__content">
            <h2 class="h2-title">
              Переходим в <span class="c-primary">онлайн</span>, если потребуется, и обратно
            </h2>
            <p class="p-regular">
              ЕГЭ-Центр имеет необходимое техническое оснащение для перехода в онлайн в случае
              запрета на посещение образовательных учреждений в очном режиме.
            </p>
            <p class="p-regular">
              Занятия проводятся через программу Zoom. Ученики видят и слышат преподавателя, могут
              задавать ему вопросы, дискутировать. Количество учеников в группе и расписание не
              меняется.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.online {
  margin: 185px 0 80px;
  &__row {
    align-items: center;
  }
  &__content {
    padding: 50px 0 20px;
    p {
      margin-top: 42px;
      max-width: 460px;
    }
  }
  &__image {
    max-width: 446px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }
}
</style>
