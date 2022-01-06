<template>
  <section class="featured-events">
    <h2 class="featured-events__title">Principais eventos</h2>
    <div class="featured-events__card-container">
      <div
        v-for="(card, index) in featuredCards"
        :key="index"
        :class="['featured-events__card', { 'featured-events__card--loading': isLoading }]"
      ></div>
      <div class="limit">

      </div>
    </div>
    <button class="featured-events__btn" @mouseover="playAnimation" @mouseleave="pauseAnimation">
      Descubra mais eventos
      <Lottie :options="defaultOptions" :height="40" :width="50" @animCreated="handleAnimation" />
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
      featuredCards: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  computed: {
    isLoading() {
      return true;
    },
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    playAnimation() {
      console.log('anim', this.anim);
      this.anim.play();
    },
    pauseAnimation() {
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
    position: relative;
    max-height: 550px;
    @apply grid grid-cols-3 gap-7 p-10 mt-8 mb-8;
    .limit {
      position: absolute;
      height: 100px;
      width: 100%;
      background: linear-gradient(to top, #FAFAFA 0%, rgba(255, 255, 255, 0) 100%);
    }
    #{ $self }__card {
      @apply bg-gray-300 rounded-sm h-48;
      &--loading {
        animation: pulse 2s infinite ease-in-out;
      }
    }
  }
  &__btn {
    @apply flex items-center w-1/5 gap-4 self-center
    bg-gradient-to-r border-2 rounded font-bold
    border-blue-dark text-blue-dark hover:border-blue-light pr-4 pl-4;
  }
}
</style>
