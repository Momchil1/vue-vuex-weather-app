import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
