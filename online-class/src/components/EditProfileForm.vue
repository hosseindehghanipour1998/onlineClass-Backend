<template>


<div id="kk" class="SignInAlignment">
    <form >
      <fieldset id="sign_up" style="padding:10px;">
        <h3 style="color:white"> Edit Profile </h3>
        <div class="row">
          <div class="column">
              <input  class="inputStyle pa2 inputStyle" type="text"  placeholder="First Name ">
          </div>
          <div class="column">
              <input class="inputStyle  pa2 inputStyle" type="text"  placeholder="Last Name ">
          </div>
        </div>

        <div class="row pa2" style="width:100% ">
            <input class="inputStyle  pa2 inputStyle" type="email" name="email-address" placeholder="Email Address" id="email-address">
        </div>

        <div class="row pa2" style="width:100% ">
          <input class="inputStyle  pa2  inputStyle" type="password" name="password"  id="password" placeholder="Password">
        </div>

      <div class="row pa2" style="width:100% ">
          <input class="inputStyle  pa2 inputStyle" type="password" name="password"  id="ConfirmPassword" placeholder="Confirm Password">
        </div>


        <div class="row">
          <div class="column3">
              <input  class="inputStyle  pa2 inputStyle" type="text"  placeholder="Postal Code ">
          </div>
          <div class="column3">
              <input class="inputStyle  pa2 inputStyle" type="text"  placeholder="Country">
          </div>

          <div class="column3">
              <input class="inputStyle  pa2 inputStyle" type="text"  placeholder="City">
          </div>
        </div>

        <div class="row pa2" style="width:100%">
          <textarea class="inputStyle pa2" name="message" rows="6" style="width:100%;" placeholder="Describe yourself here..."></textarea>
        </div>
        <div class="row pa2" >
          <input class=" buttonStyle b ph3 pv2    bg-transparent grow pointer  f6 dib" style ="width:auto;height:auto; float:right;" type="submit" value="Save">
          <input class=" buttonStyle b ph3 pv2    bg-transparent grow pointer  f6 dib" style ="width:auto;height:auto; float:left;" type="submit" value="Reset">
        </div>
      </fieldset>
    </form>
</div>
</template>

<style scoped>
 @import "../CSSFiles/Forms.css";
.SignInAlignment {
	font-family: "Comic Sans MS", cursive, sans-serif ;
	width: 100px;
  height: 100px;
  box-shadow :  rgba(0,0,0,1);
  opacity: 1 !important;
}


.inputStyle {
    color: blanchedalmond !important;
    border-radius: 12px;
	  background-color: #01142F ;
    background-color: #01142F!important;
	  transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    font-size: 1rem;
}

.inputStyle:hover{

  border-color:purple;
}


* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float:left;
  width: 50%;
  padding: 10px;
  height: auto; /* Should be removed. Only for demonstration */
}

.column3 {
  float:left;
  width: 33.33%;
  padding: 10px;
  height: auto; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

#kk {
  display: flex;
  flex:1;
  height: 100%;
  width: 100%;
}
</style>