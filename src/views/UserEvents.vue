<template>
  <div class="user-events">
    <div>
      <h2>Criar um local</h2>
      <div class="user-events__form">
        <input class="user-events__input" placeholder="Nome da categoria" type="text" />
        <button class="user-events__send-btn">
          Criar local
        </button>
      </div>
    </div>
    <div>
      <h2>Criar um endereço</h2>
      <div class="user-events__form">
        <input class="user-events__input" placeholder="Nome da categoria" type="text" />
        <button class="user-events__send-btn">
          Criar enedereço
        </button>
      </div>
    </div>
    <div>
      <h2>Criar um categoria</h2>
      <div class="user-events__form">
        <input class="user-events__input" placeholder="Nome da categoria" type="text" />
        <button class="user-events__send-btn">
          Criar categoria
        </button>
      </div>
    </div>
    <div>
      <h2>Criar um evento</h2>
      <div class="user-events__form">
        <input class="user-events__input" placeholder="Nome do evento" type="text" />
        <input class="user-events__input" placeholder="Site do evento" type="text" />
        <input class="user-events__input" placeholder="Descrição do evento" type="text" />
        <input class="user-events__input" placeholder="Capacidade do evento" type="number" />
        <BaseMultiselect
          class="user-events__multiselect"
          :placeholder="'Escolher grupo'"
          v-model="data.group"
          :options="groups"
        />
        <div class="user-events__activities">
          <div
            v-for="(activity, index) in activities"
            :key="index"
            class="user-events__activity"
          >
            <input class="user-events__input" placeholder="Nome da atividade" type="text" />
            <input class="user-events__input" placeholder="Data inicial" type="Date" />
            <input class="user-events__input" placeholder="Data final" type="Date" />
            <input class="user-events__input" placeholder="Descrição" type="text" />
            <input class="user-events__input" placeholder="Capacidade" type="number" />

            <BaseMultiselect
              class="user-events__multiselect"
              :placeholder="'Escolher grupo'"
              v-model="activities[index].group"
              :options="groups"
            />
            <BaseMultiselect
              class="user-events__multiselect"
              :placeholder="'Escolher local'"
              v-model="activities[index].local"
              :options="groups"
            />
            <BaseMultiselect
              class="user-events__multiselect"
              :placeholder="'Escolher apresentador'"
              v-model="activities[index].show"
              :options="groups"
            />
          </div>
          <button
            class="user-events__add-btn"
            @click="addActivity"
          >
            Adicionar atividade
          </button>
        </div>
        <button class="user-events__send-btn">
          Criar evento
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseMultiselect from '@/components/BaseMultiselect.vue';
import { LIST_GROUPS } from '@/store/events/actions';

export default {
  name: 'UserEvents',
  components: {
    BaseMultiselect,
  },
  data() {
    return {
      groups: [],
      data: {
        id_empresa: 1,
        id_grupo: '',
        site_evento: '',
        descricao_evento: '',
        nome_evento: '',
        capacidade_evento: '',
        id_sede: '',
      },
      activities: [],
      activityDeafault: {
        nome_atividade: '',
        data_inicial: '',
        data_final: '',
        capacidade_participantes: '',
        descricao_atividade: '',
        id_categoria: '',
        local: null,
        show: null,
        group: null,
      },
    };
  },
  methods: {
    getCategories() {
      this.$store.dispatch(LIST_GROUPS).then(({ events }) => {
        this.groups = events.map((event) => ({
          text: event.categoria,
          value: event.id_categoria,
        }));
      });
    },
    addActivity() {
      this.activities.push(this.activityDeafault);
    },

  },
  created() {
    this.getCategories();
  },
};
</script>

<style lang="scss">
.user-events {
  $self: &;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 0 1rem;
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 3rem 3rem;
    #{ $self }__input  {
      padding: 0.25rem 1rem 0.25rem;
      border: 1px solid $mid-blue;
      border-radius: 5px;
    }
    #{ $self }__multiselect {
      border: 1px solid $mid-blue;
      border-radius: 5px;
    }
    #{ $self }__add-btn {
      font-weight: bold;
      padding: 0.25rem 1rem 0.25rem;
      color: white;
      background-color: rgb(211, 145, 24);
      border-radius: 5px;
      &:hover {
        background-color: rgb(131, 92, 19);
      }
    }
    #{ $self }__activities {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: rgb(163, 163, 163);
      padding: 1rem;
      #{ $self }__activity {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-radius: 10px;
        gap: 1rem;
        padding: 1rem;
        background-color: rgb(255, 241, 214);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
    #{ $self }__send-btn {
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
</style>
