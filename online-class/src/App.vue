<template>
  <div id="app" >
    <particles></particles>
    <div class = "grandPa" style="width:100% ; height:100%;">
      <router-view />
   </div>

  </div>
</template>

<!--
<script>
import SignIn from './components/SignIn.vue'
import SUSI from './components/SUSI.vue'
import Particles from './components/Particles/Particles.vue'
import EditProfileForm from './components/EditProfileForm.vue'
import Header from './components/Header/Header.vue'
import SideBar from './components/VerticalList/SideBar.vue'
import Home from './components/Home/Home.vue';
export default {
  name: 'App',
  components: {SUSI,Particles,EditProfileForm,Header,SideBar,Home},
computed: {
    user() {
      return this.$store.state.user
    },
    isLogedin() {
      return this.$store.state.user.isLogedin
    },
    roomsLength() {
      return this.$store.getters.rooms.length
    },
    mounted() {
      console.log(this.isLogedin)
      if(!this.isLogedin){
        this.$router.push('/login')

      }
    }
  },
};
</script>

-->

<script>
import Particles from './components/Particles/Particles.vue'
export default {
  components: {Particles},
  name: "App",
  computed: {
    user() {
      return this.$store.state.user
    },
    isLogedin() {
      return this.$store.state.user.isLogedin
    },
    roomsLength() {
      return this.$store.getters.rooms.length
    }
  },
  mounted() {
    if(!this.isLogedin){
      this.$router.push('/login')
    }

  },
  watch: {
    user: {
      deep: true,

      handler(newValue){
        if (newValue.isLogedin){
          this.$router.push('/home')
          this.$store.dispatch('getUserRooms')
        }
      }
    },
    isLogedin(newValue) {
      if(!newValue) {
        this.$router.push('/login')
      }
    },
    roomsLength(newValue) {
      if(newValue) {
        this.$store.dispatch('getRoomsExams')
      }
    }
  }
};
</script>
<style>

.grandPa{
  position: absolute;
  left: 0;
  top:0;
}

#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-image: linear-gradient(89deg,#2C3E50 0% ,#000000 100%);
  /*background-color: #000000;*/
}
body{
  /*background-image: linear-gradient(89deg,#2C3E50 0% ,#000000 100%) !important;*/
  padding: 0 !important;
  margin:0 !important;
}
</style>
