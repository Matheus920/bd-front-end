<template>
  <section class="featured-events">
    <div class="featured-events__card"></div>
    <div class="featured-events__card"></div>
    <div class="featured-events__card"></div>
    <div class="featured-events__card"></div>
    <div class="featured-events__card"></div>
    <div class="featured-events__card"></div>
  </section>
</template>

<script>
export default {

};
</script>

<style lang='scss'>
.featured-events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  grid-gap: 30px;
  margin: 3rem 0 3rem;
  &__card {
    border-radius: 5px;
    background-color: lightgray;
    height: 150px;
  }
}
</style>
