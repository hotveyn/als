<template>
  <Transition name="opacity">
    <slot />
  </Transition>
</template>

<style lang="scss">
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.15s linear;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>
