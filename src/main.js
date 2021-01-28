import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueInstagram from 'vue-instagram'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAGzfxfPNhUYzbvG4KKj0AO0ZmhYbtPiq0',
    libraries: 'places' // necessary for places input
  }
})

Vue.use(VueInstagram)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
