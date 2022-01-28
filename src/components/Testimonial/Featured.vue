<template>
  <section class="ft" :class="className">
    <div class="container">
      <div class="ft__avatar" v-if="testimonial.author.avatar">
        <img :src="testimonial.author.avatar" :alt="testimonial.author.name" />
      </div>

      <div class="ft__name" v-if="testimonial.author.name">{{ testimonial.author.name }}</div>

      <div class="ft__stars" v-if="testimonial.rating">
        <UiStars :rating="testimonial.rating" size="big" />
      </div>

      <div class="ft__body">
        <h3 class="h3-title" v-html="testimonial.title" />
        <div class="p-regular" v-html="testimonial.content" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    testimonial: Object,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.ft {
  background: $colorBg;
  padding: 100px 0;
  text-align: center;
  &.bg-white {
    background: white;
  }
  &__avatar {
    position: relative;
    z-index: 1;
    width: 180px;
    height: 180px;
    margin: 0px auto;
    overflow: hidden;
    border-radius: 50%;
    user-select: none;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__name {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 500;
  }
  &__stars {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  &__body {
    margin-top: 42px;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    p,
    .p-regular {
      margin-top: 20px;
      line-height: 1.6;
    }
  }
}
</style>
