<template>
  <section class="cabinet">
    <div class="container">
      <div class="cabinet__row row">
        <div class="col col-6">
          <div class="cabinet__content">
            <h2 class="h2-title">Личный кабинет родителя</h2>
            <p class="p-regular">
              Расписание на весь год, список пройденных тем и будущих занятий, отчеты, статистика
              посещений и пропусков занятий доступны родителям через личный кабинет.
            </p>
          </div>
        </div>
        <div class="col col-6">
          <div class="cabinet__image">
            <img
              src="/static/img/static/cabinet.png"
              srcset="/static/img/static/cabinet@2x.png 2x"
              alt=""
            />
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
.cabinet {
  margin: 115px 0;
  &__row {
    align-items: center;
  }
  &__content {
    padding: 50px 0 20px;
    p {
      margin-top: 26px;
      max-width: 460px;
    }
    h3 {
      margin-top: 60px;
    }
  }
  &__image {
    max-width: 630px;
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
