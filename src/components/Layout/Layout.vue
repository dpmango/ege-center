<template>
  <div class="page">
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  &__content {
    flex: 1 0 auto;
  }
}
</style>
