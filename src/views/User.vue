<template>
    <div class="user">
    <div class="user__content">
        <UserInfo class="user__sidebar"/>
    </div>
        <TheFooter />
    </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
  components: {
    TheFooter,
    UserInfo,
  },
};
</script>

<style lang='scss'>
.user {
  $self: &;
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__content {
    flex: 1 0 auto;
    #{ $self }__sidebar {
    }
  }
}
</style>
