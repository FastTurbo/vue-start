<template>
  <div>
    <h2>{{ msg }}-{{ $route.params.newsId }} - {{ $route.params.newsNumber}}</h2>
    <router-view></router-view>

  </div>
</template>

<script>

  export default {
    name: 'hi',
    data () {
      return {
        msg: 'This is the hi page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
