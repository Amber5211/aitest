// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '../src/api/api'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Notification } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.prototype.$notify = Notification;
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
    components: { App },
    template: '<App/>'
})