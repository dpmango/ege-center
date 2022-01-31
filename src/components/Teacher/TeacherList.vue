<template>
  <section class="teachers" :class="className">
    <div class="container">
      <h2 class="h2-title">
        {{ title }} <span class="c-light" v-if="titleCount">{{ titleCount }}</span>
      </h2>

      <div v-if="subtitle" class="teachers__subtitle p-regular">{{ subtitle }}</div>

      <div class="teachers__grid">
        <TeacherCard
          v-for="(teacher, idx) in list"
          :key="idx"
          :avatar="teacher.avatar"
          :name="teacher.name"
          :description="teacher.description"
        />
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
    title: String,
    titleCount: String || Number,
    subtitle: String,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.teachers {
  margin: 96px 0 115px;
  &.m0 {
    margin: 0;
    .teachers__grid {
      margin-top: 0;
    }
    .container {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &__subtitle {
    margin-top: 56px;
    max-width: 480px;
  }
  &__grid {
    margin-top: 110px;
    display: grid;
    grid-gap: 125px 0px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
