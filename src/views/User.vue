<template>
    <div class="user">
        <TheHeader />
        <UserInfo />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    UserInfo,
  },
};
</script>
