<template>
    <div>
        <div>我是父组件</div>
        <component-test></component-test>
    </div>
</template>
  
  <script>
  import componentTest from './components/component-test'
  export default {
    name: 'App',
    components: {
        componentTest
    }
  }
  </script>
  