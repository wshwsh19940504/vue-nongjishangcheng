import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {GoodsAction,GoodsActionIcon,GoodsActionButton,PullRefresh,Button,Cell,Row,List,Col,Toast,NavBar,Icon,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Tab,Tabs,Field,CellGroup} from 'vant'

Vue.prototype.$http=axios

import './assets/css/reset.css'
Vue.config.productionTip = false

Vue.use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)
.use(Tab).use(Tabs).use(Field).use(CellGroup).use(Toast).use(Col).use(Row).use(List).use(Cell).use(PullRefresh)
.use(GoodsAction)
.use(GoodsActionIcon)
.use(GoodsActionButton)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

