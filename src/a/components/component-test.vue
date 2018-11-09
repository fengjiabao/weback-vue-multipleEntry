<template>
    <div>
        我是嵌套组件{{name}}
        <button @click="showTest">点我</button>
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
      mounted(){
          mapService.on('message',function(data){
              console.log('on---')
              console.log('我是接收兄弟组件的数据：',data)
          })
      },
      methods: {
        showTest () {
            console.log('mapSERVIE--',mapService.DataStore.get('test'))
            mapService.DataStore.setObjVal('test.a',[1,2])
            alert(this.name)
        }
    }
  }
  </script>
  