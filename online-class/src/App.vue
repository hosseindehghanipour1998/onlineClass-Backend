<template>
  <div id="app" >
    <Header></Header>

  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import SUSI from './components/SUSI.vue'
import Particles from './components/Particles.vue'
import EditProfileForm from './components/EditProfileForm.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {SUSI,Particles,EditProfileForm,Header},
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
