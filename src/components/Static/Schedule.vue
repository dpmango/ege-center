<template>
  <div class="schedule">
    <div class="container">
      <div class="schedule__wrapper">
        <div class="schedule__head">
          <p class="schedule__label">Расписание занятий</p>
          <h2 class="h2-title">
            Занятия в группах проходят <br />
            в следующих интервалах:
          </h2>
        </div>

        <div class="schedule__grid">
          <div class="schedule__day" v-for="day in schedule" :key="day.id">
            <label>{{ day.label }}</label>

            <ul>
              <li v-for="(time, idx) in day.times" :key="idx">
                {{ time }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schedule: [
        {
          id: 1,
          label: "Понедельник",
          times: ["16:20 – 18:25", "17:20 – 19:25", "18:35 – 20:40"],
        },
        {
          id: 2,
          label: "Вторник",
          times: ["16:20 – 18:25", "17:20 – 19:25", "18:35 – 20:40"],
        },
        {
          id: 3,
          label: "Среда",
          times: ["16:20 – 18:25", "17:20 – 19:25", "18:35 – 20:40"],
        },
        {
          id: 4,
          label: "Четверг",
          times: ["16:20 – 18:25", "17:20 – 19:25", "18:35 – 20:40"],
        },
        {
          id: 5,
          label: "Пятница",
          times: ["16:20 – 18:25", "17:20 – 19:25", "18:35 – 20:40"],
        },
        {
          id: 6,
          label: "Суббота",
          times: ["10:20 – 12:25", "12:35 – 14:40", "14:50 – 16:55", "17:05 – 19:10"],
        },
        {
          id: 7,
          label: "Воскресенье",
          times: ["10:20 – 12:25", "12:35 – 14:40", "14:50 – 16:55", "17:05 – 19:10"],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.schedule {
  padding: 102px 0 105px 0;
  background: $colorBg;
  &__wrapper {
    align-items: center;
  }
  &__head {
    h2 {
      margin-top: 16px;
      line-height: 1.4;
    }
  }
  &__label {
    font-weight: 500;
    color: $colorGreen;
  }

  &__grid {
    margin-top: 92px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: flex-start;
    grid-gap: 15px;
  }
  &__day {
    background: #ffffff;
    box-shadow: 0px 29px 60px -17px rgba(110, 112, 175, 0.1);
    border-radius: 20px;
    padding: 34px 16px 50px;
    text-align: center;
    label {
      font-weight: 500;
      color: $colorPrimary;
    }
    ul {
      margin: 30px 0 20px;
      li {
        display: block;
        font-family: "HK Grotesk";
        font-weight: 600;
        margin-bottom: 6px;
      }
    }
  }
}
</style>
