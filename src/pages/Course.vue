<template>
  <LayoutLanding>
    <!-- <Hero />
    <StudyPlan />
    <Schedule />
    <Features /> -->

    <CtaSignup />
    <Gallery :slides="content.gallery" />
    <CtaSignup />
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/course"

export default {
  name: "Course",
  data() {
    return {
      content,
    }
  },
}
</script>
