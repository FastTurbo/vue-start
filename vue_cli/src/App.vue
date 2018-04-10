<template>
  <div id="app">
    <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/one">Page One</router-link>
      <router-link to="/one/one1">Page One1</router-link>
      <router-link to="/one/one2">Page One2</router-link>
      <router-link to="/two">Page Two</router-link>
      <router-link :to="{name:'three',params:{id:111,name:'zhangsan',age:15}}">Page Three</router-link>
      <router-link to="/four/111/zhangsan">Page four</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-enter{
    opacity:0;
  }
  .fade-enter-active{
    transition:opacity .2s;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .2s;
  }
</style>
