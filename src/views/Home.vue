<template>
  <div class="home">
    <TheHeader></TheHeader>
    <TheBanner/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheBanner from '@/components/TheBanner.vue';

export default {
  name: 'Home',

  components: {
    TheHeader,
    TheBanner,
  },
};
</script>
