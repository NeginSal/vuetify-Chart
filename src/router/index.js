import Vue from 'vue'
import VueRouter from 'vue-router'
import Item1 from '../views/Item1.vue'
import Item2 from '../views/Item2.vue'
import Item3 from '../views/Item3.vue'
import Item4 from '../views/Item4.vue'
import Item5 from '../views/Item5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Item1',
    component: Item1
  },
  {
    path: '/item2',
    name: 'Item2',
    component: Item2
  },
  {
    path: '/item3',
    name: 'Item3',
    component: Item3
  },
  {
    path: '/item4',
    name: 'Item4',
    component: Item4
  },
  {
    path: '/item5',
    name: 'Item5',
    component: Item5
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
