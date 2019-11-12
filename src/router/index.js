import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import BotNav from '../views/BotNav.vue'
let Home = ()=> import('../views/Home.vue');
let Category = ()=> import('../views/Category.vue');
let Cart = ()=> import('../views/Cart.vue');
let Profile = ()=> import('../views/Profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
 
     {
          //嵌套路由里面不能加/
        path: '/home',
        name: 'home',
        component: Home,
        components:{
          default:Home,
          'botnav':BotNav
        }
        },
        {
        path: '/cart',
        component:Cart,
        components:{
          default:Cart,
          'botnav':BotNav
        }
        },
        {
        path: '/category',
        // meta:{
        //   requireAuth:true//需要登陆权限才会展示
        // },
        component:Category,
        components:{
          default:Category,
          'botnav':BotNav
        }
        },
        {
        path: '/profile',
        component: Profile,
        components:{
          default:Profile,
          'botnav':BotNav
        }
        },
        {
          //动态路由传参
        path: '/detail/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
        }
    
  
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
