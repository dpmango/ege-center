<template>
  <section class="topics" :class="className">
    <div class="container">
      <h2 class="topics__title h2-title tac">Выберите предмет</h2>

      <div class="topics__grid">
        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/math.png"
              srcset="/static/img/topicIcons/math@2x.png 2x"
              alt="icon"
            />
          </div>
          Математика
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/physics.png"
              srcset="/static/img/topicIcons/physics@2x.png 2x"
              alt="icon"
            />
          </div>
          Физика
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/chemestry.png"
              srcset="/static/img/topicIcons/chemestry@2x.png 2x"
              alt="icon"
            />
          </div>
          Химия
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/biology.png"
              srcset="/static/img/topicIcons/biology@2x.png 2x"
              alt="icon"
            />
          </div>
          Биология
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/history.png"
              srcset="/static/img/topicIcons/history@2x.png 2x"
              alt="icon"
            />
          </div>
          История
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/social.png"
              srcset="/static/img/topicIcons/social@2x.png 2x"
              alt="icon"
            />
          </div>
          Обществознание
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/english.png"
              srcset="/static/img/topicIcons/english@2x.png 2x"
              alt="icon"
            />
          </div>
          Английский язык
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/literature.png"
              srcset="/static/img/topicIcons/literature@2x.png 2x"
              alt="icon"
            />
          </div>
          Литература
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/russian.png"
              srcset="/static/img/topicIcons/russian@2x.png 2x"
              alt="icon"
            />
          </div>
          Русский язык
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/it.png"
              srcset="/static/img/topicIcons/it@2x.png 2x"
              alt="icon"
            />
          </div>
          Информатика
        </router-link>

        <router-link to="course/1">
          <div class="topics__img">
            <img
              src="/static/img/topicIcons/writing.png"
              srcset="/static/img/topicIcons/writing@2x.png 2x"
              alt="icon"
            />
          </div>
          Итоговое сочинение
        </router-link>
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
.topics {
  margin: 170px 0 240px 0;
  &__grid {
    margin: 52px auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    max-width: 846px;
    padding: 0;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 10px 34px 10px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      background: #f6f6fc;
      border-radius: 15px;
      transition: color 0.25s $ease;

      &:hover {
        color: $colorPrimary;
      }
    }
  }
  &__img {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin-bottom: 18px;
    img {
      max-width: 100%;
    }
  }
}
</style>
