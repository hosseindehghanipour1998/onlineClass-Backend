<template>


<div class="SignInAlignment">
  <main class="pa4 black-80">
    <form class="measure center">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f4 fw6 ph0 mh0 textWhite">Register</legend>
        <div class="mt3">
          <input class="inputStyle grow inputStyle" type="text" v-model="form.first_name" placeholder="Firstname" >
        </div>
        <div class="mt3">
          <input class="inputStyle grow " type="text"  v-model="form.last_name" placeholder="LastName" >
        </div>

        <div class="mt3">
          <input class="inputStyle  grow " type="text"  v-model="form.username" placeholder="Username" >
        </div>
        <div class="mv3">
          <input class="inputStyle grow " type="password"   id="password" v-model="form.password" placeholder="Password">
        </div>
        <div class="mv3">
          <input class="inputStyle grow " type="password"   id="password"  v-model="form.confirm_password" placeholder="Confirm Password">
        </div>
      <div class="">
        <input class=" buttonStyle grow"  v-on:click="registerUser" type="submit" value="Register">
      </div>
      <div class="lh-copy mt3" style="display: inline-block;">
          <p> </p>
          <a v-on:click="changePage" class="f6 link dim black db pointer" style="color:white">Already a member ? <b>Login</b></a>
      </div>

      </fieldset>

    </form>
  </main>
</div>
</template>

<script>
export default {

    data(){
      return{
        form : {
          first_name : "Mohammad",
          last_name : "Siavashi",
          password : "Hossein123",
          confirm_password : "Hossein123" ,
          username : "M_Siavashi" ,
        }
      }
    },
    methods :{
        changePage: function(){
            this.$emit('changePage', 'signInWanted');
            console.log('Emitting signInWanted');
        },
        registerUser(){
            event.preventDefault();
            if(this.form.password == this.form.confirm_password) {
                delete this.form['confirm_password']
                console.log(this.form)
                this.$store.dispatch('register', this.form)
            }
        }

    }
}
</script>
<style scoped>

p{
    font-family: "Comic Sans MS", cursive, sans-serif ;
}


.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background-color: powderblue !important;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    opacity: 1;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}


.SignInAlignment {
	font-family: "Comic Sans MS", cursive, sans-serif ;
	width: auto;
	height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow :0 20px 20px 0 rgb(0, 0, 0), 0 20px 20px 0 rgba(0, 0, 0, 1);
  box-shadow :  1 20px 20px 0 rgba(0,0,0,1);
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
    padding : 2px;
}

.inputStyle:hover{
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
}

.inputStyle:click{
	background-color: red;

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

.textWhite {
    color: white !important;
    font-family: "Comic Sans MS", cursive, sans-serif ;

}


.buttonStyle:hover {
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
  color: black !important;
}

.ba {
    border-style: solid;
    border-width: 1px;
}

.b--black {
    border-color: #000;
}

.b--transparent {
    border-color: transparent;
}

.db {
    display: block;
}

.dib {
    display: inline-block;
}

.b {
    font-weight: bold;
}

.fw6 {
    font-weight: 600;
}

.input-reset {
    -webkit-appearance: none;
       -moz-appearance: none;
}

.input-reset::-moz-focus-inner {
    border: 0;
    padding: 0;
}

.lh-copy {
    line-height: 1.5;
}

.link {
    text-decoration: none;
    transition: color .15s ease-in;
}

.link:link, .link:visited {
    transition: color .15s ease-in;
}

.link:hover {
    transition: color .15s ease-in;
}

.link:active {
    transition: color .15s ease-in;
}

.link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
}

.w-100 {
    width: 100%;
}

.black-80 {
    color: rgba(0, 0, 0, .8);
}

.black {
    color: #000;
}

.bg-transparent {
    background-color: transparent;
}


.hover-white:hover {
    color: #fff;
}

.hover-white:focus {
    color: #fff;
}

.hover-bg-black:hover {
    background-color: #000;
}

.hover-bg-black:focus {
    background-color: #000;
}

.pa0 {
    padding: 0;
}

.pa2 {
    padding: .5rem;
}

.pa4 {
    padding: 2rem;
}

.pv2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
}

.ph0 {
    padding-left: 0;
    padding-right: 0;
}

.ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.ma0 {
    margin: 0;
}

.mt3 {
    margin-top: 1rem;
}

.mv3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.mh0 {
    margin-left: 0;
    margin-right: 0;
}

.f4 {
    font-size: 1.5rem;
}

.f6 {
    font-size: 1.5rem;
}

.measure {
    max-width: 30em;
    height: auto;
}

.center {
    margin-right: auto;
    margin-left: auto;
}

.dim {
    opacity: 1;
    transition: opacity .15s ease-in;
}

.dim:hover, .dim:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
}

.dim:active {
    opacity: .8;
    transition: opacity .15s ease-out;
}

.grow {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .25s ease-out;
}

.grow:hover, .grow:focus {
    transform: scale(1.05);
}

.grow:active {
    transform: scale(.9);
}

.pointer{
    cursor: pointer;
}
</style>