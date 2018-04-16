<template>
    <div>
      <h2>{{ msg }}</h2>
      <h3>{{ $store.state.count }}</h3>
      <p>
        <button @click="$store.commit('add')">加</button>
        <button @click="$store.commit('reduce')">减</button>
      </p>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    export default {
        data () {
          return {
            msg:'Hello Vuex'
          }
        },
      store
    }
</script>

<style scoped>

</style>
