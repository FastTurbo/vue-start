<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <div>
      <button @click="prev()">前进</button>
      <button @click="back()">后退</button>
    </div>

    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi/3234">Hi页面</router-link> |
      <router-link to="/home">回到首页</router-link> |
      <router-link to="/hi2/4343">回到hi</router-link> |
      <router-link to="/hi1">hi1</router-link> |
      <router-link to="/testHi1">testHi1</router-link> |

    </div>
    <p>{{ $route.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    prev(){
      this.$router.go(1)
    },
    back(){
      this.$router.go(-1)
    }
  }
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
    transition:opacity .5s;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
