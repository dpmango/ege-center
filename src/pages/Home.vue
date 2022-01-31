<template>
  <LayoutLanding>
    <StaticHomeBanner />
    <StaticFeatures :list="content.features" className="bg-white pb-100" />
    <CourseList :list="content.courses" />
    <TestimonialFeatured :testimonial="content.featuredTestimonial" className="bg-white" />
    <StaticFeatures
      title="Мы уверены в результате"
      :list="content.featuresResult"
      className="pb-100"
    />
    <TeacherList
      :list="content.teachers"
      title="Кто наши преподаватели"
      titleCount="61"
      subtitle="Сильнейшая команда преподавателей ЕГЭ-Центра, которая ежедневно работает на результат учеников"
    />
    <StaticTrialExam className="mt-0" />
    <TestimonialCarousel :list="[...content.testimonials, ...content.testimonials]" />
    <Gallery :slides="content.gallery" />
    <ContactLocations />
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/home"

export default {
  name: "Home",
  data() {
    return {
      content,
    }
  },
}
</script>
