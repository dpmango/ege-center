<template>
  <LayoutLanding>
    <div class="students">
      <div class="container">
        <h1 class="h2-title">100 лучших учеников</h1>

        <div class="students__grid row">
          <div class="students__col" v-for="(col, idx) in gridRows" :key="idx">
            <TestimonialCard v-for="(testimonial, idx) in col" :key="idx" :data="testimonial" />
          </div>
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import chunk from "lodash/chunk"
import content from "./JSON_data/topstudents"

export default {
  name: "TopStudents",
  data() {
    return {
      content,
    }
  },
  computed: {
    gridRows() {
      const cols = 3

      return chunk(this.content.testimonials, Math.floor(this.content.testimonials.length / cols))
    },
  },
}
</script>

<style lang="scss" scoped>
.students {
  margin-top: 44px;
  margin-bottom: 105px;
  &__grid {
    margin: 28px -20px -20px;
    display: flex;
    flex-wrap: wrap;
  }
  &__col {
    width: 100%;
    flex: 0 0 $col4;
    max-width: $col4;
    padding: 20px;
    .testimonialCard {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
