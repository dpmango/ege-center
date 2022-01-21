<template>
  <LayoutLanding>
    <Hero />
    <StaticStudyPlan />
    <StaticSchedule :schedule="content.schedule" />
    <StaticFeatures />
    <StaticReports />
    <StaticCabinet />
    <StaticOnline />
    <TestimonialFeatured :testimonial="content.featuredTestimonial" />
    <TeacherList :list="content.teachers" />
    <StaticTrialExam />
    <TestimonialCarousel :list="[...content.testimonials, ...content.testimonials]" />
    <CtaSignup />
    <Gallery :slides="content.gallery" />
    <ContactLocations />
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
