<template>
    <div>
      <h2>{{ msg }}</h2>
      <h3>{{ count }}</h3>
      <h4>{{ result }}</h4>
      <p>
        <button @click="add(10)">加</button>
        <button @click="reduce(5)">减</button>
      </p>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import { mapState,mapMutations,mapGetters } from 'vuex'
    export default {
      name: "count",
      data(){
          return {
            msg:'Hello world'
          }
      },
      computed:{
        ...mapState(['count']),
        ...mapGetters(['count']),

        result(){
          return this.count + 5
        }
      },
      methods:{
        ...mapMutations(['add','reduce']),

        results(){
          console.log(this.count)
        }
      },
      store
    }
</script>

<style scoped>

</style>
