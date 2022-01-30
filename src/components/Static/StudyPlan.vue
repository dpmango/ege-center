<template>
  <section class="plan">
    <div class="container">
      <div class="row plan__wrapper">
        <div class="col col-6">
          <div class="plan__content">
            <p class="plan__label">Учебный план</p>
            <h2 class="h2-title">5 тематических модулей обществоведческого курса:</h2>
            <ul class="ul">
              <li>Человек и общество</li>
              <li>Познание и духовная культура</li>
              <li>Экономика</li>
              <li>Социальные отношения</li>
              <li>Политика и право</li>
            </ul>
            <p class="p-regular">
              Параллельно с изучением теретического материала, учащиеся закрепляют полученные
              знания, практикуясь на решении типовых тестовых заданий, аналогичным заданиям,
              содержащихся в контрольно-измерительных материалах ЕГЭ, и написанием эссе.
            </p>

            <div class="plan__stats">
              <div class="plan__stat">
                <span class="plan__stat-value">8</span>
                <span class="plan__stat-label">Учебных <br />месяцев</span>
              </div>
              <div class="plan__stat">
                <span class="plan__stat-value">1</span>
                <span class="plan__stat-label">Занятие <br />в неделю</span>
              </div>
              <div class="plan__stat">
                <span class="plan__stat-value">125</span>
                <span class="plan__stat-label">Минут <br />длится урок</span>
              </div>
            </div>

            <router-link to="course/1">
              <UiButton theme="accent">подробная программа курса</UiButton>
            </router-link>
            <!-- <p class="p-regular c-light">
              Длительность занятий: <span class="c-gray w-500">2 ч 5 мин</span>
            </p>

            <a href="#" class="iconed-link"> Узнать подробнее <SvgIcon name="arrow-right" /></a> -->
          </div>
        </div>

        <div class="col col-6">
          <div class="plan__image"><img src="/static/img/static/studyPlan_decor.svg" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.plan {
  padding: 115px 0 105px 0;
  &__wrapper {
    align-items: center;
  }
  &__content {
    h2 {
      margin-top: 30px;
      line-height: 1.4;
    }
    ul {
      margin-top: 44px;
      margin-bottom: 50px;
      color: $colorGray;
    }
    p {
      max-width: 472px;
      line-height: 1.9;
    }
    .iconed-link {
      margin-top: 25px;
    }
  }
  &__label {
    font-weight: 500;
    color: $colorGreen;
  }

  &__image {
    text-align: center;
  }

  &__stats {
    margin-top: 50px;
    margin-right: -40px;
    margin-bottom: 36px;
    display: flex;
    flex-wrap: wrap;
  }
  &__stat {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-right: 80px;
    margin-bottom: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__stat-value {
    margin-right: 16px;
    font-family: "HK Grotesk";
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 72px;
    color: #4346d5;
  }
  &__stat-label {
    color: $colorGray;
  }
}

.iconed-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  text-decoration: underline;
  transition: color 0.25s $ease;
  .svg-icon {
    margin-left: 15px;
    font-size: 11px;
  }
  &:hover {
    color: $colorPrimary;
  }
}
</style>
