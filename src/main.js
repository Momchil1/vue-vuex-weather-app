import Vue from 'vue'
import App from './components/App.vue'
import store from './store';

Vue.config.productionTip = false

new Vue({
  store, // add the stroe to our vue instance
  render: h => h(App),
}).$mount('#app')
