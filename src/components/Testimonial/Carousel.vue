<template>
  <section class="testimonials" :class="className">
    <div class="container">
      <div class="testimonials__head">
        <div>
          <div class="testimonials__label" v-if="label">{{ label }}</div>
          <h2 class="h2-title" v-if="title" v-html="title" />
        </div>

        <div class="swiperNav">
          <div :class="`swiperNav__prev testimonialsPrev_${uid}`">
            <SvgIcon name="arrow-nav-left" />
          </div>
          <div :class="`swiperNav__next testimonialsNext_${uid}`">
            <SvgIcon name="arrow-nav-right" />
          </div>
        </div>
      </div>

      <swiper ref="mySwiper" class="testimonials__slider" :options="swiperOptions">
        <swiper-slide v-for="(slide, idx) in list" class="testimonials__slide slide" :key="idx">
          <TestimonialCard :data="slide" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import uniqueId from "lodash/uniqueId"

export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          // nextEl: `.testimonialsNext_${this.uid}`,
          // prevEl: `.testimonialsPrev_${this.uid}`,
        },
      },
    }
  },
  props: {
    list: Array,
    label: String,
    title: String,
    className: String,
  },
  created() {
    this.swiperOptions.navigation = {
      nextEl: `.testimonialsNext_${this.uid}`,
      prevEl: `.testimonialsPrev_${this.uid}`,
    }
  },
  computed: {
    uid() {
      return uniqueId()
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  position: relative;
  overflow: hidden;
  background: $colorBg;
  padding: 105px 0 125px;
  &.compact {
    padding: 50px 0 80px 0px;
    .testimonials__head {
      align-items: center;
    }
  }
  &__label {
    font-weight: 500;
    color: $colorGreen;
  }
  &__slider {
    margin-top: 60px;
    overflow: visible;
  }
  &__slide {
    flex: 0 0 400px;
    width: 400px;
    min-width: 1px;
  }
  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    h2 {
      margin-top: 20px;
      line-height: $defaultLineHeight;
    }
  }
}

.swiperNav {
  margin-left: auto;
  flex: 0 0 auto;
  margin-bottom: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  &__prev,
  &__next {
    position: static;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 52px;
    height: 52px;
    top: auto;
    bottom: 0;
    margin: 0 6px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 30px rgba(110, 112, 175, 0.15);
    color: $colorLight;
    font-size: 11px;
    cursor: pointer;
    transition: background 0.25s $ease, color 0.25s $ease, box-shadow 0.25s $ease;
    &::after {
      display: none;
    }
    &.swiper-button-disabled {
      opacity: 0.6;
    }
    &:hover {
      background: $colorPrimary;
      color: white;
      box-shadow: none;
    }
  }
  &__prev {
    left: calc(50% - 60px);
  }
  &__next {
    right: calc(50% - 60px);
  }
}
</style>
