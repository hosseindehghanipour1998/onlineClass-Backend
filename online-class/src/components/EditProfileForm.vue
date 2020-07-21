<template>


<div class="SignInAlignment">
  <form>
        <h3 style="color:white"> Edit Profile </h3>
        <div class="row">
          <input  class="inputStyle  pa2 inputStyle" type="text"  placeholder="First Name ">
          <input class="inputStyle  pa2 inputStyle" type="text"  placeholder="Last Name ">
        </div>

        <div class="otherColumns">
          <input class="inputStyle  pa2 inputStyle" type="email"  placeholder="Email Address" id="email-address">
          <input class="inputStyle  pa2  inputStyle" type="password"  id="password" placeholder="Password">
          <input class="inputStyle  pa2 inputStyle" type="password"  id="password" placeholder="Confirm Password">
        </div>

        <div class="row">
          <input id="column" class="inputStyle  pa2 inputStyle" type="text"  placeholder="Postal Code ">
          <input id="column" class="inputStyle  pa2 inputStyle" type="text"  placeholder="Country">
          <input id="column" class="inputStyle  pa2 inputStyle" type="text"  placeholder="City">
        </div>
        <div class="otherColumns">
          <textarea class="inputStyle pa2 " name="message" rows="6" style="width:100%;" placeholder="Describe yourself here..."></textarea>
        </div>

        <div class="row">
          <input class=" buttonStyle"  type="submit" value="save">
          <input class=" buttonStyle"  type="submit" value="reset">
        </div>
  </form>
</div>
</template>

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