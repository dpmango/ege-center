<template>
  <div class="page">
    <div class="page__content">
      <Header />
      <slot />
      <Footer />
      <ModalSignup />
    </div>
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"

export default {
  components: { Header, Footer },
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  &__content {
    flex: 1 0 auto;
    padding-top: 195px;
  }
}
</style>
