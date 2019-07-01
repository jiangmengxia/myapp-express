<template>
  <div id="body">
    <side></side>
    <router-view id="router-view"/>
  </div>
</template>

<script>
    import Side from './src/components/side'
  export default {
    name: 'App',
    components:{
        Side
    }
  }
</script>

<style src="./src/styles/common.css"></style>
