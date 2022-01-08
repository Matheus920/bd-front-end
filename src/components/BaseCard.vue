<template>
  <div
    :class="['base-card', { 'base-card--loading': isLoading }]"
    @click='selectEvent'
  >
    <span class="base-card__title"> {{data.nome_evento}} </span>
    <p class="base-card__description">
      {{data.descricao_evento}}
    </p>
    <div
      class="base-card__capacity"
    >
      Capacidade: <span>{{data.capacidade_evento}}</span>
    </div>
    <span class="base-card__site">
      {{data.site_evento}}
    </span>
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
      console.log(this.id);
      if (!this.isLoading) { this.$store.dispatch(SELECT_EVENT, this.id); }
    },
  },
};
</script>

<style lang="scss">
.base-card {
  @apply bg-gray-300 rounded-sm h-48;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  text-align: justify;
  color: $dark-blue;
  &--loading {
    animation: pulse 2s infinite ease-in-out;
  }
  &__title {
    font-weight: bold;
    font-size: 1.2em;
  }
  &__description {
  }
  &__capacity {
    span {
      font-weight: bold;
    }
  }
  &__site {
    text-align: end;
  }
}
</style>
