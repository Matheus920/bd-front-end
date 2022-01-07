<template>
  <section class="main-banner">
    <div class="main-banner__text-area">
      <h2 class="main-banner__title">
        Encontre o <span class="main-banner__emphasis"> melhor </span>passatempo para o seu final de
        semana
      </h2>
      <p class="main-banner__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in c
      </p>
    </div>
    <div class="main-banner__figure">
      <Lottie :options="defaultOptions" :height="400" :width="600" @animCreated="handleAnimation" />
      <button class="main-banner__btn" @click="goToEvents">
        Explore os eventos
      </button>
    </div>
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
    goToEvents() {
      this.$router.push({ name: 'Events' });
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
  &__figure {
    position: sticky;
    #{ $self }__btn {
      --border-width: 4px;
      position: relative;
      font-size: 3em;
      text-align: center;
      color: #fcedd8;
      background: $baby-blue;
      padding: 0.5rem 3rem 0.75rem 2rem;
      border-radius: 7px;
      font-weight: 700;
      margin-top: -2.5rem;
      text-shadow: 3px 3px 0px #46b59b, 6px 6px 0px #017e7f;
      &:hover {
        &::after {
          position: absolute;
          content: "";
          top: calc(-1 * var(--border-width));
          left: calc(-1 * var(--border-width));
          z-index: -1;
          width: calc(100% + var(--border-width) * 2);
          height: calc(100% + var(--border-width) * 2);
          background: linear-gradient(60deg, #fcedd8,#ffb743, $baby-blue, $mid-blue, $dark-blue);
          background-size: 300% 300%;
          background-position: 0 50%;
          border-radius: calc(2 * var(--border-width));
          animation: moveGradient 4s alternate infinite;
        }
      }
    }
  }
}
</style>
