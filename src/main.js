import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueInstagram from 'vue-instagram'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueInstagram)

Vue.config.productionTip = false
 
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1,
  rotate: {
      x: 1000,
      y: 0,
      z: 0,
  },
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
