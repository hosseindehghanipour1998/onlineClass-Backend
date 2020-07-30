<template>


<div class="SignInAlignment">
  <form>
        <h3 style="color:white"> Join Class </h3>
        <div class="row">
          <input  id="columnLeft" class="inputStyle pa2 inputStyle"  v-model="roomLink"  type="text"  placeholder="Class Hash">
          <input  class="buttonStyle columnRight" value="Search" >
          <input class="buttonStyle columnRight" v-on:click="joinClass" value="Join" >
        </div>
        <!-- <div class="otherColumns">
        <input class="inputStyle pa5 "   style="width:100%;text-align:center;" v-model="msg" placeholder="Status">
        </div> -->

  </form>
</div>
</template>


<script>
export default {

  data(){
    return {
      roomLink : '' ,
    }
  },
  methods: {
    joinClass(){
      this.$store.dispatch('joinRoom', this.roomLink)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>


.SignInAlignment {
  display: flex;
  flex-direction:column;
  align-items: center;
  font-family: "Comic Sans MS", cursive, sans-serif ;
  width: 100%;
  height: 100%;
  opacity: 1 !important;
}


.inputStyle {
    color: white !important;
    border-radius: 12px;
    background-color: #01142F;
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    font-size: 1.5rem;
    padding:8px;
    margin:3px;
}
.row{
  display:flex;
  width:100%;
  height: auto;
}

.buttonStyle:hover {
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
  color: black ;
}
.otherColumns{
  display: flex;
}
#columnLeft{
  width:80% !important;
  height: auto;
}

.columnRight{
  width:20%  !important;
  text-align : center;
  height: auto;
}

.buttonStyle{
  border-radius: 12px;
  background-color: powderblue;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  align-content: center;
  font-size: 1rem;
  margin: 4px 2px;
  transition-duration: 0.2s;
  cursor: pointer;
  width: 50%;
  border: 2px solid #008CBA;
}


.buttonStyle:active{
  background-color: royalblue;
  color: red;
  box-shadow: 0 5px #666;
  transform: translateY(2px);
}



.inputStyle:hover{
  border-color:purple;
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
}
</style>