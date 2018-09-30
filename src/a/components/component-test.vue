<template>
    <div>
        我是嵌套组件{{name}}
        <button @click="showTest"></button>
    </div>
</template>
  
  <script>
  import def from '../js/def'
  export default {
      data(){
          return {
              name : def.name,
              pwd : def.pwd
          }
      },
      methods: {
        showTest () {
            alert(this.name)
        }
    }
  }
  </script>
  