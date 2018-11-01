import Vue from 'vue'
import App from './app'
import mapService from '../../mapService/mapService.js'
mapService.DataStore.set('test',{a:111,b:222})
console.log(mapService.DataStore)
new Vue({
    // el: '#app',
    // router,
    // store,
    // components: { Login },
    // template: '<login/>'
    render: h => h(App)
}).$mount('#app')