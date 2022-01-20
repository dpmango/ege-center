<template>
  <section class="features">
    <div class="container">
      <div class="schedule__wrapper">
        <div class="features__grid">
          <div class="feature" v-for="feature in features" :key="feature.id">
            <div class="h1-title c-primary">{{ feature.label }}</div>
            <p class="p-regular" v-html="feature.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: 1,
          label: "от 6 до 10",
          description: "учеников 9-11 класса обучаются ежегодно&nbsp;в&nbsp;ЕГЭ-Центре",
        },
        {
          id: 2,
          label: "+24 балла",
          description: "Преподавателей-экспертов ЕГЭ, членов апелляционных комиссий",
        },
        {
          id: 3,
          label: "столовая",
          description: "Учебных филиалов ЕГЭ-Центра по всей Москве",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.features {
  padding: 102px 0 105px 0;
  background: $colorBg;
  &__wrapper {
    align-items: center;
  }
  &__grid {
    display: grid;
    max-width: 880px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(3, auto);
    grid-gap: 15px;
  }
}

.feature {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 210px;
    margin-top: 26px;
    line-height: 1.5;
  }
}
</style>
