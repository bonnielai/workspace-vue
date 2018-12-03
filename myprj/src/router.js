import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path';
//import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

const routerConfig = [
    {
        path: '/',
        meta: {
            title: 'my project'
        },
        component: (resolve) => require(['./views/HelloWorld.vue',resolve])
    }
]

export default new Router({
    mode: 'history',
    routes: routerConfig
})
/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
