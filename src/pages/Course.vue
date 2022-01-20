<template>
  <LayoutLanding>
    <Hero />
    <StudyPlan />
    <Schedule />
    <Features />
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
