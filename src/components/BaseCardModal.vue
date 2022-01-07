<template>
  <div
    :class="['modal', { 'modal--active': showModal }]"
  >
    <label class="modal__bg"></label>
    <div class="modal__inner">
      <label class="modal__close" @click='closeModal'></label>
      <h2>Evento</h2>
    </div>
  </div>
</template>

<script>
import { SELECT_EVENT, GET_EVENT_REQUEST } from '@/store/events/actions';

export default {
  name: 'BaseCardModal',
  data() {
    return {
      data: [],
    };
  },
  computed: {
    showModal() {
      return this.$store.getters.isSelectedEvent;
    },
    eventId() {
      return this.$store.getters.selectedEventId;
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch(SELECT_EVENT, null);
    },
    getEventDetails() {
      this.$store.dispatch(GET_EVENT_REQUEST, this.id);
    },
  },
  watch: {
    showModal: {
      immediate: true,
      handler() {
        if (this.showModal) { this.getEventDetails(); }
      },
    },
  },
};
</script>

<style lang="scss">
.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.623);
  transition: opacity 0.25s ease;
  z-index: 80;
  &--active {
    opacity: 1;
    visibility: visible;
  }
  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }
  &__inner {
    transition: top 0.25s ease;
    position: absolute;
    top: -20%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    margin: auto;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    padding: 1em 2em;
    height: 50%;
  }

  .modal__close {
    position: absolute;
    right: 1em;
    top: 1em;
    width: 1.1em;
    height: 1.1em;
    cursor: pointer;
  }

  .modal__close:after,
  .modal__close:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 1.5em;
    background: #ccc;
    display: block;
    transform: rotate(45deg);
    left: 50%;
    margin: -3px 0 0 -1px;
    top: 0;
  }

  .modal__close:hover:after,
  .modal__close:hover:before {
    background: #aaa;
  }

  .modal__close:before {
    transform: rotate(-45deg);
  }
}
</style>
