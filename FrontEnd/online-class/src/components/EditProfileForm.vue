<template>


<div class="SignInAlignment">
  <form>
        <h3 style="color:white"> Account General Info </h3>
        <div class="row">
          <input  class="inputStyle  pa2 inputStyle" type="text" :value="this.userData.first_name" placeholder="First Name " disabled >
          <input class="inputStyle  pa2 inputStyle" type="text"  :value="this.userData.last_name" placeholder="Last Name " disabled>
        </div>


        <div class="otherColumns">
          <input class="inputStyle  pa2 inputStyle" type="email"  placeholder="Email Address"  :value="this.userData.email" id="email-address" disabled>
          <!-- <input class="inputStyle  pa2  inputStyle" type="password"  id="password"  placeholder="Password">
          <input class="inputStyle  pa2 inputStyle" type="password"  id="password"   placeholder="Confirm Password"> -->
        </div>

        <div class="row">
          <input id="column" class="inputStyle  pa2 inputStyle" type="text"  placeholder="Postal Code " disabled>
          <input id="column" class="inputStyle  pa2 inputStyle" type="text"  placeholder="Country" disabled>
          <input id="column" class="inputStyle  pa2 inputStyle" type="text" :value="'UN:  ' + this.userData.username" placeholder="username" disabled>
        </div>
        <!-- <div class="otherColumns">
          <textarea class="inputStyle pa2 " name="message" rows="6" style="width:100%;" placeholder="Describe yourself here..."></textarea>
        </div> -->

        <!-- <div class="row">
          <input class=" buttonStyle"  type="submit" value="save">
          <input class=" buttonStyle"  type="submit" value="reset">
        </div> -->
  </form>
</div>
</template>

<script>
export default {
  data(){
    return{
      userData : {
        username : "",
        password : "" ,
        first_name : "",
        last_name : "",
        email : ""
      }
    }
  },

  mounted() {
    //let UserObject = JSON.parse(localStorage.getItem('userData'))
    //console.log("Received Data")
    //console.log(UserObject)
    this.userData.username = this.$store.state.user.username ;
    this.userData.first_name = this.$store.state.user.first_name ;
    this.userData.last_name = this.$store.state.user.last_name ;
    this.userData.email = this.$store.state.user.email
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
  /*box-shadow :0 4px 8px 0 rgb(0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 1);*/
  /*box-shadow :  1 8px 16px 0 rgba(0,0,0,1);*/
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
    cursor: pointer;
}
.row{
  display:flex;

  width:100%;
  height: auto;
}

.buttonStyle:hover {
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
  color: black !important;
}
.otherColumns{
  display: flex;
}
#column{
  justify-content: center;
  width:100%;
  height: 100%;
}

.buttonStyle{
  border-radius: 12px;
  background-color: powderblue!important;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  align-content: center;
  font-size: 1.5rem;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 50%;
  border: 2px solid #008CBA;
}

.inputStyle:hover{
  border-color:purple;
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
}
</style>