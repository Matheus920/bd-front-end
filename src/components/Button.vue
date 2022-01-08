<template>
    <div class="button">
        <span :class="icon_class"></span>
        <span style="width: 100%; text-align: left; margin-left: 10%">{{text}}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      icon_class: `mdi mdi-24px mdi-${this.icon}`,
    };
  },
  props: {
    icon: {
      Type: String,
      Required: true,
    },
    text: {
      Type: String,
      Required: true,
    },
  },
};
</script>

<style lang="scss">
    .button {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 5%;
    }
</style>
