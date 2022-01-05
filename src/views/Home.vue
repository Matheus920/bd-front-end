<template>
  <div class="home">
    <TheHeader></TheHeader>
    <TheBanner/>
    <!-- <Categories /> -->
    <FeaturedEvents />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheBanner from '@/components/TheBanner.vue';
import TheFooter from '../components/TheFooter.vue';
import FeaturedEvents from '../components/ FeaturedEvents.vue';
// import Categories from '@/components/Categories.vue';

export default {
  name: 'Home',

  components: {
    TheHeader,
    TheBanner,
    TheFooter,
    // Categories,
    FeaturedEvents,
  },
};
</script>
