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
// https://coderoad.ru/48515023/%D0%9E%D1%82%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D1%85-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-Vuejs-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BE%D0%B2
