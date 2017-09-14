<template>
  <div id="app">

      <router-view></router-view>
  </div>
</template>

<script>
import  './css/resets.css';
import VueRouter from 'vue-router';
export default {
  name: 'app'
}
</script>

<style>
  html,body{
      height:100%
  }
  #app{
    background:url('imgs/bg.jpg') no-repeat;
    height:100%;
    background-size:100% 100%;
    position: relative;
    overflow: hidden;
  }
 
</style>

