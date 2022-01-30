<template>
  <section class="banner">
    <div class="container">
      <div class="banner__row">
        <div class="banner__image banner__image--left">
          <img src="/static/img/static/homebanner-1.svg" alt="" />
        </div>

        <div class="banner__content">
          <h1 class="h1-title">Готовьтесь к ЕГЭ заранее</h1>
          <p class="p-regular">
            Сеть образовательных центров в Москве по подготовке школьников 9–11 классов к ЕГЭ и ОГЭ.
            Также на базе ЕГЭ-Центра работает утренняя школа для учеников 10 и 11 классов,
            <br />выдающая аттестаты государственного образца
          </p>
          <UiButton size="big" @click="() => setModal('signup')">Записаться на курсы</UiButton>
        </div>

        <div class="banner__image banner__image--right">
          <img src="/static/img/static/homebanner-2.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations("ui", ["setModal"]),
  },
}
</script>

<style lang="scss" scoped>
.banner {
  margin: 145px 0 80px;
  &__row {
    display: flex;
  }
  &__content {
    flex: 1 1 auto;
    text-align: center;
    padding: 0 30px;
    p {
      margin-top: 44px;
    }
    button {
      margin-top: 65px;
    }
  }
  &__image {
    flex: 0 0 auto;
    font-size: 0;
    text-align: center;
    img {
      max-width: 100%;
    }
    &--left {
      width: 276px;
      margin-left: -30px;
    }
    &--right {
      width: 240px;
      margin-right: -20px;
      margin-top: -45px;
    }
  }
}
</style>
