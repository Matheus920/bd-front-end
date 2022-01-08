<template>
    <div class="user_info">{{userInfo.name}}</div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>

<style lang="scss">
    .user_info {
        display: flex;
        width: 20%;
        justify-items: start;
        padding-left: 5%;
        background-color: #fff;
    }
</style>
