<template>
  <section class="main-banner">
    <div class="main-banner__text-area">
      <h2 class="main-banner__title">
        Encontre o <span class="main-banner__emphasis"> melhor </span>passatempo para o seu final
        de semana
      </h2>
      <p class="main-banner__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in c
      </p>
    </div>
    <figure class="main-banner_figute">
      <Lottie :options="defaultOptions" :height="400" :width="600" @animCreated="handleAnimation" />
    </figure>
  </section>
</template>

<script>
import PartyAnimation from '@/assets/animations/29774-dance-party.json';
import Lottie from '@/components/Lottie.vue';

export default {
  name: 'TheBanner',
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: PartyAnimation },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    onSpeedChange() {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-banner {
  $self: &;
  @apply flex items-center mt-10;
  &__text-area {
    @apply flex flex-col items-center gap-5;
    #{ $self }__title {
      @apply font-bold w-4/6;
      font-size: 1.85em;
      color: $baby-blue;
      #{ $self }__emphasis {
        color: $dark_blue;
        font-size: 2em;
      }
    }
    #{ $self }__description {
      @apply w-3/4 text-justify;
      color: $dark_blue;
    }
  }
}
</style>
