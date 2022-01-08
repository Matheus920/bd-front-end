<template>
    <div class="user">
        <UserInfo />
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
