<template>
    <div class="user_info">
      <div class="user_info__header">
        <div class="user_info__header_info">
            <img :src=userProfilePic class="user_info__rounded_image">
            <span class="user_info__centered_span">{{userName}}</span>
        </div>
        <div class="user_info__header_separator">
            <hr>
        </div>
      </div>
      <div class="user_info__list">
            <Button icon="account-circle" text="Editar Perfil"/>
            <Button icon="ticket" text="Visualizar Atividades"/>
            <Button icon="calendar-edit" text="Criar Evento"/>
            <Button icon="certificate" text="Listar Certificados"/>
      </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'UserInfo',
  components: {
    Button,
  },
  computed: {
    userName() {
      return this.$store.getters.userData.data.nome_usuario;
    },
    userProfilePic() {
      return this.$store.getters.userData.data.imagem_perfil;
    },
  },
};
</script>

<style lang="scss">
    .user_info {
        $self: &;
        display: flex;
        flex-flow: wrap;
        width: 20%;
       // height: 100vh;
        background-color: #fff;
        &__header {
            width: 100%;
            height: 20vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
        }
        &__header_info {
            display: flex;
            flex-flow: nowrap;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        &__header_separator {
            margin-top: 3px;
            width: 80%;
        }
        &__rounded_image {
            border-radius: 50%;
        }
        &__centered_span {
            width: 100%;
        }
        &__list {
            display: flex;
            flex-flow: wrap;
            width: 100%;
            margin-left: 10%;
        }
    }
</style>
