<template>
  <div class="events">
    <TheHeader v-model='searchEvent'/>
    <div class="events__content">
      <EventsList :search="searchEvent" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import EventsList from '../components/EventsList.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    EventsList,
  },
  data() {
    return {
      searchEvent: null,
    };
  },
};
</script>

<style lang='scss'>
.events {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: $background-color;
  &__content {
    flex: 1 0 auto;
  }
}
</style>
