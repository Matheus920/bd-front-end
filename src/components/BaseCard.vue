<template>
  <div
    :class="['base-card', { 'base-card--loading': isLoading }]"
    @click='selectEvent'
  >
  </div>
</template>

<script>
import { SELECT_EVENT } from '@/store/events/actions';

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
    id: {
      Required: true,
    },
    data: {
      default: [],
    },
  },
  methods: {
    selectEvent() {
      this.$store.dispatch(SELECT_EVENT, this.id);
    },
  },
};
</script>

<style lang="scss">
.base-card {
  @apply bg-gray-300 rounded-sm h-48;
  cursor: pointer;
  &--loading {
    animation: pulse 2s infinite ease-in-out;
  }
}
</style>
