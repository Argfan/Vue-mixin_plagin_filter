import Vue from 'vue'
import App from './App.vue'
import SimplePlugin from './plugins/simplePlugin.js'

import marked from 'marked';

import '@/assets/styles/main.scss';

Vue.use(SimplePlugin)
Vue.filter('marked', marked)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
