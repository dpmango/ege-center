<template>
  <section class="testimonials">
    <div class="container">
      <div class="testimonials__head">
        <div>
          <div class="testimonials__label">Отзывы</div>
          <h2 class="h2-title">Что говорят о нас <span class="c-light">5347 отзывов</span></h2>
        </div>

        <div class="swiperNav">
          <div class="swiperNav__prev testimonialsPrev">
            <SvgIcon name="arrow-nav-left" />
          </div>
          <div class="swiperNav__next testimonialsNext">
            <SvgIcon name="arrow-nav-right" />
          </div>
        </div>
      </div>

      <swiper ref="mySwiper" class="testimonials__slider" :options="swiperOptions">
        <swiper-slide v-for="(slide, idx) in list" class="testimonials__slide slide" :key="idx">
          <div class="slide__head">
            <div class="slide__avatar">
              <img :src="slide.author.avatar" :alt="slide.author.name" />
            </div>
            <div class="slide__head-content">
              <span class="f-700">{{ slide.author.name }}</span>
              <small v-if="slide.author.position">{{ slide.author.position }}</small>
            </div>
          </div>

          <div class="slide__rating" v-if="slide.rating">
            <UiStars :rating="slide.rating" />
          </div>

          <div class="slide__content" v-if="slide.content">
            <p v-html="slide.content" />
          </div>

          <div class="slide__subject" v-if="slide.subject">
            {{ slide.subject }}
          </div>
          <div class="slide__date" v-if="slide.date">
            {{ slide.date }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: ".testimonialsNext",
          prevEl: ".testimonialsPrev",
        },
      },
    }
  },
  props: {
    list: Array,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false)
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  position: relative;
  overflow: hidden;
  background: $colorBg;
  padding: 105px 0 125px;
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

.slide {
  background: #ffffff;
  box-shadow: 0px 0px 40px 6px rgba(110, 112, 175, 0.05);
  border-radius: 20px;
  padding: 48px 40px 42px;
  &__head {
    display: flex;
    align-items: center;
  }
  &__head-content {
    display: flex;
    flex-direction: column;
    padding-left: 22px;
    small {
      font-size: 14px;
      color: $colorLight;
    }
  }
  &__avatar {
    flex: 0 0 auto;
    position: relative;
    z-index: 1;
    font-size: 0;
    width: 45px;
    height: 45px;
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
  &__rating {
    margin-top: 30px;
  }
  &__content {
    margin-top: 20px;
    p {
      font-size: 15px;
      line-height: 1.8;
      color: $colorGray;
    }
  }
  &__subject {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    color: $colorPrimary;
  }
  &__date {
    margin-top: 20px;
    font-size: 14px;
    color: $colorLight;
  }
}

.swiperNav {
  margin-left: auto;
  flex: 0 0 auto;
  margin-bottom: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
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
