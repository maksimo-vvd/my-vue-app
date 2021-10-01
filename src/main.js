import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import './assets/css/styles.css' // tailwind


Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// https://dev.to/thecoderishi/quick-start-with-tailwind-css-334n
// https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
