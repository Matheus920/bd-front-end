<template>
  <div class="home">
    <TheHeader v-model='searchEvent'/>
    <HeaderSearchPreview v-if="showPreviewSearch" :search="searchEvent"/>
    <div class="home__content">
      <TheBanner/>
      <!-- <Categories /> -->
      <FeaturedEvents />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HeaderSearchPreview from '@/components/HeaderSearchPreview.vue';
import TheBanner from '@/components/TheBanner.vue';
import TheFooter from '../components/TheFooter.vue';
import FeaturedEvents from '../components/FeaturedEvents.vue';
// import Categories from '@/components/Categories.vue';

export default {
  name: 'Home',
  data() {
    return {
      searchEvent: null,
    };
  },
  computed: {
    showPreviewSearch() {
      return !!this.searchEvent;
    },
  },
  components: {
    TheHeader,
    HeaderSearchPreview,
    TheBanner,
    TheFooter,
    // Categories,
    FeaturedEvents,
  },
};
</script>
