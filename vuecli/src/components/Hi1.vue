<template>
  <div>
    <h2>{{ msg }} - {{ $route.params.username }} _ {{ $route.params.id}}</h2>

  </div>
</template>

<script>
  export default {
    name: 'hi1',
    data () {
      return {
        msg: 'This is the hi1 page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
