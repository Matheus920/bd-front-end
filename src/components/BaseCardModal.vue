<template>
  <div
    :class="['modal', { 'modal--active': showModal }]"
  >
    <label class="modal__bg"></label>
    <div class="modal__inner">
      <BaseLoader v-if="isLoading" class="modal__loader"/>
      <template v-else>
        <label class="modal__close" @click='closeModal'></label>
        <h2 class="modal__header">{{data.nome_evento}}</h2>
        <span><span class="font-bold">Capacidade:</span> {{data.capacidade_evento}}</span>
        <span><span class="font-bold">Site:</span> {{data.site_evento}}</span>
        <p>
          <span class="font-bold">Descrição:</span>
          {{data.descricao_evento}}
        </p>
        <div class="modal__activities">
          <h3> Atividades: </h3>
          <div
            v-for="(activity, index) in data.atividades"
            :key="index"
            class="modal__activity"
          >
            <div>
              <span> {{activity.nome_atividade}}</span>
              <p>{{activity.descricao_atividade}}</p>
            </div>
            <div>
              <button class="btn modal__activity-join"> Se inscrever </button>
            </div>
            <div class="flex flex-col w-full">
              <span> Data de inicio: </span>
              <span> Data de fim: </span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { SELECT_EVENT, GET_EVENT_REQUEST } from '@/store/events/actions';
import BaseLoader from '@/components/BaseLoader.vue';

export default {
  name: 'BaseCardModal',
  components: {
    BaseLoader,
  },
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
    isLoading() {
      return this.$store.getters.eventStatus === 'loading';
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch(SELECT_EVENT, null);
    },
    getEventDetails() {
      this.$store.dispatch(GET_EVENT_REQUEST, this.eventId)
        .then((data) => {
          this.data = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
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
  $self: &;
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
  &__loader {
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
  }
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
    display: flex;
    flex-direction: column;
    top: -5%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    margin: auto;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    padding: 2em 3em;
    height: 80%;
    color: rgb(128, 128, 128);
    #{ $self }__header {
      color: $dark-blue;
      font-weight: bold;
      font-size: 1.5em;
      margin-bottom: 1rem;
    }
    #{ $self }__activities {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
      overflow: auto;
      padding: 2rem;
      h3 {
        color: $dark-blue;
        font-weight: bold;
        border-bottom: 1px solid rgb(158, 158, 158);
        padding: 0 0 0.5rem;
        margin-bottom: 1rem;
      }
      #{ $self }__activity {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid $dark-blue;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        &:hover {
          position: relative;
          transform: scale(1.05);
        }
        #{ $self }__activity-join {
          font-weight: bold;
          padding: 0.25rem 1rem 0.25rem;
          color: white;
          background-color: $mid-blue;
          border-radius: 5px;
          &:hover {
            background-color: $dark-blue;
          }
        }
      }
    }
    #{ $self }__close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      width: 1.1em;
      height: 1.1em;
      cursor: pointer;
      &:after, &:before {
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
      &:hover:after,
      &:hover:before {
        background: #aaa;
      }
      &:before {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
