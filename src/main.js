import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { Tabbar, Button, TabbarItem,} from 'vant';

Vue.config.productionTip = false

Vue.use(Tabbar).use(Button).use(TabbarItem);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
