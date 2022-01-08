<template>
    <div class="user_info">
        <img :src=userProfilePic class="user_info__rounded_image">
        <span class="user_info__centered_span">{{userName}}</span>
    </div>
</template>

<script>
export default {
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
        width: 20%;
        justify-items: start;
        background-color: #fff;
        &__rounded_image {
            border-radius: 50%;
        }
        &__centered_span {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
