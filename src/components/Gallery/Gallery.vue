<template>
  <section class="gallery">
    <div class="container">
      <swiper ref="mySwiper" class="gallery__slider" :options="swiperOptions">
        <swiper-slide v-for="(slide, idx) in slides" class="gallery__slide" :key="idx">
          <div class="gallery__image">
            <img :src="slide.image.src" :alt="slide.image.alt" />
          </div>
        </swiper-slide>
      </swiper>

      <div class="swiperNav">
        <div class="swiperNav__prev galleryPrev">
          <SvgIcon name="arrow-nav-left" />
        </div>
        <div class="swiperNav__next galleryNext">
          <SvgIcon name="arrow-nav-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 25,
        navigation: {
          nextEl: ".galleryNext",
          prevEl: ".galleryPrev",
        },
      },
    }
  },
  props: {
    slides: Array,
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
.gallery {
  position: relative;
  overflow: hidden;
  padding: 110px 0 115px;
  margin-bottom: 90px;
  user-select: none;
  &__slider {
    padding: 0px;
    overflow: visible;
    padding-bottom: 0px;
  }
  &__slide {
    flex: 0 0 456px;
    width: 456px;
    min-width: 1px;
  }
  &__image {
    position: relative;
    z-index: 1;
    font-size: 0;
    border-radius: 10px;
    overflow: hidden;
    img,
    picture {
      max-width: 100%;
    }
  }
}

.swiperNav {
  position: absolute;
  bottom: 20px;
  z-index: 2;
  left: 0;
  right: 0;
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
