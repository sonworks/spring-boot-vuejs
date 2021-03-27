import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sample from '@/pages/Sample.vue'
import About from '@/pages/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
