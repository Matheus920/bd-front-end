<template>
  <div class="events">
    <TheHeader />
    <div class="events__content">
      >Filtros
      >Lista de eventos - paginado?
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang='scss'>
.events {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__content {
    flex: 1 0 auto;
  }
}
</style>
