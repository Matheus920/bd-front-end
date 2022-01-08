<template>
    <div class="user">
      <div class="user__content">
          <UserInfo class="user__sidebar" @viewChanged="setCurrentView"/>
      </div>
          {{currentView}}
          <router-view :name=currentView></router-view>
          <TheFooter />
    </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
  data() {
    return {
      currentView: 'EditProfile',
    };
  },
  components: {
    TheFooter,
    UserInfo,
  },
  methods: {
    setCurrentView(viewName) {
      this.currentView = viewName;
    },
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
