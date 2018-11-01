<template>
    <div>
        <div>我是父组件</div>
        <component-test></component-test>
        <component-testTwo></component-testTwo>
    </div>
</template>
  
  <script>
  import componentTest from './components/component-test'
  import componentTestTwo from './components/component-testTwo'
  export default {
    name: 'App',
    components: {
        componentTest,
        componentTestTwo
    }
  }
  </script>
  