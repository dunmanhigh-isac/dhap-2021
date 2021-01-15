import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueInstagram from 'vue-instagram'

Vue.use(VueInstagram)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
