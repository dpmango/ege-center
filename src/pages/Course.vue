<template>
  <LayoutLanding>
    <HeroCourse />
    <StaticStudyPlan />
    <StaticSchedule
      label="Расписание занятий"
      title="Занятия в группах проходят <br/>в следующих интервалах:"
      :schedule="content.schedule"
    />
    <StaticFeatures :list="content.features" />
    <StaticReports />
    <StaticCabinet />Расписание занятий
    <StaticOnline />
    <TestimonialFeatured :testimonial="content.featuredTestimonial" />
    <TeacherList :list="content.teachers" title="Наши преподаватели" />
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
