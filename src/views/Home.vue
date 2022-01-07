<template>
  <div class="home">
    <TheHeader v-model='searchEvent'/>
    <HeaderSearchPreview v-if="showPreviewSearch" :search="searchEvent"/>
    <div class="home__content">
      <TheBanner/>
      <!-- <Categories /> -->
      <FeaturedEvents />
    </div>
    <BaseCardModal />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HeaderSearchPreview from '@/components/HeaderSearchPreview.vue';
import TheBanner from '@/components/TheBanner.vue';
import BaseCardModal from '@/components/BaseCardModal.vue';
import TheFooter from '../components/TheFooter.vue';
import FeaturedEvents from '../components/FeaturedEvents.vue';
import { SET_SEARCH_STATUS } from '@/store/events/actions';

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
    BaseCardModal,
    TheFooter,
    // Categories,
    FeaturedEvents,
  },
  watch: {
    searchEvent: {
      handler() {
        this.$store.dispatch(SET_SEARCH_STATUS, 'loading');
      },
    },
  },
};
</script>
