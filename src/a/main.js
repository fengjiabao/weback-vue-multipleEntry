import Vue from 'vue'
import App from './app'
import mapService from '../../mapService/mapService.js'
mapService.DataStore.set("test",{ a: 1, b: [23, 33], c: { a: [1, 3], b: 2 }})
console.log(mapService.DataStore)
new Vue({
    // el: '#app',
    // router,
    // store,
    // components: { Login },
    // template: '<login/>'
    render: h => h(App)
}).$mount('#app')