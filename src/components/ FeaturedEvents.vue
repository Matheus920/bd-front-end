<template>
  <section class="featured-events">
    <h2 class="featured-events__title">Principais eventos</h2>
    <div class="featured-events__card-container">
      <div class="featured-events__card"></div>
      <div class="featured-events__card"></div>
      <div class="featured-events__card"></div>
      <div class="featured-events__card"></div>
      <div class="featured-events__card"></div>
      <div class="featured-events__card"></div>
    </div>
    <button class="featured-events__btn" @mouseover="play" @mouseleave="pause">
      Descubra mais eventos
      <Lottie
        :options="defaultOptions"
        :height="40"
        :width="50"
        @animCreated="handleAnimation"
      />
    </button>
  </section>
</template>

<script>
import ArrowAnimation from '@/assets/animations/lf20_faorml1q.json';
import Lottie from '@/components/Lottie.vue';

export default {
  name: 'FeaturedEvents',
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: ArrowAnimation, autoplay: false },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    play() {
      console.log('anim', this.anim);
      this.anim.play();
    },
    pause() {
      this.anim.pause();
    },
    onSpeedChange() {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

<style lang="scss">
.featured-events {
  $self: &;
  @apply flex flex-col mt-12 mb-12;
  &__title {
    @apply text-xl text-gray-600 font-bold;
  }
  &__card-container {
    @apply grid grid-cols-3 gap-7 p-4 mt-8 mb-8;
    #{ $self }__card {
      @apply bg-gray-300 rounded-sm h-48;
      // &--loading {
        animation: pulse 2s infinite ease-in-out;
      // }
    }
  }
  &__btn {
    @apply flex items-center w-1/5 gap-4 self-center
    bg-gradient-to-r border-2 rounded font-bold
    border-blue-dark text-blue-dark hover:border-blue-light pr-4 pl-4;
  }
}
</style>
