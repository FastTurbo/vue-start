import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/hi/:newsId',
      name:'hi',
      component:Hi,
      beforeEnter:function(to,from,next){
        console.log(to)
        console.log(from)
        next();
      }
    },
    {
      path:'/home',
      redirect:'/'
    },{
      path:'/hi2/:newsId',
      redirect:'/hi/:newsId'
    },
    {
      path:'/hi1',
      name:'hi1',
      component:Hi1,
      alias:'/testHi1'
    },{
      path:'/count',
      component:Count
    },{
      path:'*',
      component:Error
    }

  ]
})
