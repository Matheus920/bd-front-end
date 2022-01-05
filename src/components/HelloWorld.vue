<template>
  <div class="hello">
    <Header></Header>
  </div>
</template>

<script>
import Header from './TheHeader.vue';

export default {
  name: 'HelloWorld',
  comments: {
    Header,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
