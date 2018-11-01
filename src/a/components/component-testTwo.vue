<template>
    <div>
        我是嵌套组件b {{name}}
        <button @click="showTest">点我11</button>
    </div>
</template>
  
  <script>
  import def from '../js/def'
  import mapService from '../../../mapService/mapService'
  console.log('component service',mapService.DataStore)
  export default {
      data(){
          return {
              name : def.name,
              pwd : def.pwd
          }
      },
      methods: {
        showTest () {
            mapService.trigger('message','senddata')
        }
    }
  }
  </script>
  