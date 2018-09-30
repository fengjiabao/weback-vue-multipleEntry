import Vue from 'vue'
import App from './app'

new Vue({
    // el: '#app',
    // router,
    // store,
    // components: { Login },
    // template: '<login/>'
    render: h => h(App)
}).$mount('#app')