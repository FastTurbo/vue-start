<template>
    <div>
      <h2>{{ msg }}</h2>
      <h3>{{ count }}</h3>
      <p>
        <button @click="$store.commit('add')">加</button>
        <button @click="$store.commit('reduce')">减</button>
      </p>
    </div>
</template>

<script>
    import store from '@/vuex/state'
    import { mapState } from 'vuex'
    export default {
      name: "count",
      data(){
          return {
            msg:'Hello world'
          }
      },
      computed:mapState(['count']),
      store
    }
</script>

<style scoped>

</style>
