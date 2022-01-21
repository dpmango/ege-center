<template>
  <section class="teachers">
    <div class="container">
      <h2 class="h2-title">Наши преподаватели</h2>

      <div class="teachers__grid">
        <div v-for="(teacher, idx) in list" class="teachers__item" :key="idx">
          <div class="teachers__avatar">
            <img :src="teacher.avatar" :alt="teacher.name" />
          </div>
          <h4 class="teachers__item-name h4-title" v-html="teacher.name" />
          <div class="teachers__item-description p-regular">{{ teacher.description }}</div>
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
  props: {
    list: Array,
  },
}
</script>

<style lang="scss" scoped>
.teachers {
  margin: 96px 0 115px;
  &__grid {
    margin-top: 110px;
    display: grid;
    grid-gap: 125px 0px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &__item {
    padding: 0 20px;
  }
  &__item-name {
    margin-top: 60px;
    line-height: 1.4;
  }
  &__item-description {
    margin-top: 24px;
    line-height: 1.6;
  }
  &__avatar {
    position: relative;
    z-index: 1;
    font-size: 0;
    width: 210px;
    height: 210px;
    border-radius: 50%;
    overflow: hidden;
    img,
    picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
