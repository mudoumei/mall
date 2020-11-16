import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/catagory',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue')
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
