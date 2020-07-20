<template>
<!--
<div>
     <form>
        <p>Sign in</p>
        <label>
        Your email
        </label>
        <input type="email" class="inputStyle" />
        <br />
        <label >Your password</label>
        <input type="password" class="inputStyle"/>

        <div >
            <button  className="buttonStyle" type="submit"  class="buttonStyle">Login</button>
        </div>
    </form>
</div>
-->

<div class="SignInAlignment">
<main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0 textWhite">Sign In</legend>
      <div class="mt3">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent grow   inputStyle" type="email" name="email-address" placeholder="Email" id="email-address">
      </div>
      <div class="mv3">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent  grow  inputStyle" type="password" name="password"  id="password" placeholder="Password">
      </div>
    </fieldset>
    <div class="">
      <input class=" buttonStyle b ph3 pv2 input-reset ba  bg-transparent grow pointer  f6 dib" type="submit" value="Login">
    </div>
    <div class="lh-copy mt3" style="display: inline-block;">
        <p> </p>
        <a v-on:click="changePage" class="f6 link dim black db pointer" style="color:white">Not a member ? <b>Sign up</b></a>
    </div>
  </form>
</main>
</div>
</template>
<script>
export default {
    methods :{
        changePage: function(){
            this.$emit('changePage', 'signUpWanted');
            console.log('Emitting signUpWanted');
      }
    }
}
</script>

<style scoped>
 @import "../CSSFiles/Forms.css"
</style>