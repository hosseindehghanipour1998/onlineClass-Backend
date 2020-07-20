<template>
  <div id="app" >
          <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="100"
        :moveSpeed="3"
        :clickEffect="false"
      >
      </vue-particles>
    <SUSI ></SUSI>
  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import SUSI from './components/SUSI.vue'
export default {
  name: 'App',
  components: {SUSI},

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*background-image: linear-gradient(89deg,#206CEB 0% ,#2F0166 100%);*/
}
body{
  background-image: linear-gradient(89deg,#2C3E50 0% ,#000000 100%);

}
</style>
