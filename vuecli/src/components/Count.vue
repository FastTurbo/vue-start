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
    import store from '@/vuex/store'
    import { mapState } from 'vuex'
    export default {
        data () {
          return {
            msg:'Hello Vuex'
          }
        },
       /*computed:{
          count(){
            return this.$store.state.count
          }
        },*/
       computed:mapState({
         count:state => state.count
       }),
      //computed:mapState(['count']),

      store
    }
</script>

<style scoped>

</style>
