<template>
  <LayoutLanding>
    <div class="notFound">
      <div class="container">
        <div class="notFound__decor">404</div>

        <h1 class="notFound__description">Страницы с таким адресом не существует!</h1>
      </div>
    </div>
  </LayoutLanding>
</template>

<style lang="scss" scoped>
.notFound {
  position: relative;
  text-align: center;
  margin: 140px 0 220px;
  &__decor {
    font-size: 160px;
    line-height: 183px;
    color: $colorPrimary;
  }
  &__description {
    margin: 15px 0 0;
    font-weight: normal;
    font-size: 40px;
    color: #000000;
  }
}
</style>
