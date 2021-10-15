<template>
  <Header></Header>
</template>

<script>
import Header from './header/header.vue';

export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	components: {
		Header,
	},
};
</script>

<style lang="sass">

</style>
