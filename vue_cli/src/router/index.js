import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/PageOne'
import PageOne1 from '@/components/PageOne1'
import PageOne2 from '@/components/PageOne2'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/one',
      component:PageOne,
      children:[
        {
          path:'/',
          name:'page-one',
          component:PageOne,
        },
        {
          path:'one1',
          name:'page-one1',
          component:PageOne1
        },
        {
          path:'one2',
          name:'page-one2',
          component:PageOne2
        }
      ]
    },
    {
      path:'/two',
      name:'page-two',
      component:PageTwo,
      redirect:'/'
    },
    {
      path:'/three',
      name:'three',
      component:PageThree
    },
    {
      path:'/four/:id/:name',
      name:'four',
      component:PageFour,
      alias:'/aaa/:id/:name'
    },
    {
      path:'*',
      component:ErrorPage
    }
  ]
})
