<template>
  <div
    :class="['base-card', { 'base-card--loading': isLoading }]"
  >
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  data() {
    return {};
  },
  props: {
    isLoading: {
      Type: Boolean,
      Default: false,
    },
  },
};
</script>

<style lang="scss">
.base-card {
  @apply bg-gray-300 rounded-sm h-48;
  &--loading {
    animation: pulse 2s infinite ease-in-out;
  }
}
</style>
