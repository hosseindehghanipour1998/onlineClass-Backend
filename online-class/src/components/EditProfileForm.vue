<template>


<div class="SignInAlignment">
<main class="black-80 full">
  <form class="center card">
    <fieldset id="sign_up" style="padding:10px;" class="ba b--transparent ph0 mh0">
      <h3 style="color:white"> Edit Profile </h3>

      <div class="row">
        <div class="column">
            <input  class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="text"  placeholder="First Name ">
        </div>
        <div class="column">
            <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="text"  placeholder="Last Name ">
        </div>
      </div>

      <div class="row pa2" style="display:inline !important; ">
          <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="email" name="email-address" placeholder="Email Address" id="email-address">
      </div>

      <div class="row pa2" style="display:inline !important; ">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="password" name="password"  id="password" placeholder="Password">
      </div>

     <div class="row pa2" style="display:inline !important; ">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="password" name="password"  id="password" placeholder="Confirm Password">
      </div>


      <div class="row">
        <div class="column3">
            <input  class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="text"  placeholder="Postal Code ">
        </div>
        <div class="column3">
            <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="text"  placeholder="Country">
        </div>

        <div class="column3">
            <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent    inputStyle" type="text"  placeholder="City">
        </div>
      </div>

      <div class="row pa2" style="width:100%">
        <textarea class="inputStyle pa2" name="message" rows="6" style="width:100%;" placeholder="Describe yourself here..."></textarea>
      </div>
      <div class="row pa2" style=" float:left; !important; ">
        <input class=" buttonStyle b ph3 pv2 input-reset ba  bg-transparent grow pointer  f6 dib" style ="width:auto;height:auto;" type="submit" value="save">
      </div>

    </fieldset>

  </form>
</main>
</div>
</template>

<style scoped>
 @import "../CSSFiles/Forms.css";
.SignInAlignment {
	font-family: "Comic Sans MS", cursive, sans-serif ;
	width: 80%;
	height: 80%;
  	position: absolute;
  	left: 50%;
  	top: 50%;
  	transform: translate(-50%, -50%);
    box-shadow :0 4px 8px 0 rgb(0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 1);
    box-shadow :  1 8px 16px 0 rgba(0,0,0,1);
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
    font-size: 1.5rem;
}

.inputStyle:hover{

  border-color:purple;
}

.inputStyle:click{
	border-block-color: pink;

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

.full{
    widows: 100%;
    height: 100%;
}


.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>