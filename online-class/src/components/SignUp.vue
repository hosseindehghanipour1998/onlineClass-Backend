<template>


<div class="SignInAlignment">
<main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0 textWhite">Register</legend>
      <div class="mt3">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent grow   inputStyle" type="text" name="email-address" placeholder="Full Name" id="email-address">
      </div>
      <div class="mt3">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent grow   inputStyle" type="email" name="email-address" placeholder="Email" id="email-address">
      </div>
      <div class="mv3">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent  grow  inputStyle" type="password" name="password"  id="password" placeholder="Password">
      </div>
      <div class="mv3">
        <input class="inputStyle  pa2 input-reset ba b--transparent bg-transparent  grow  inputStyle" type="password" name="password"  id="password" placeholder="Confirm Password">
      </div>
    </fieldset>
    <div class="">
      <input class=" buttonStyle b ph3 pv2 input-reset ba  bg-transparent grow pointer  f6 dib" type="submit" value="Register">
    </div>
    <div class="lh-copy mt3" style="display: inline-block;">
        <p> </p>
        <a v-on:click="changePage" class="f6 link dim black db pointer" style="color:white">Already a member ? <b>Login</b></a>
    </div>
  </form>
</main>
</div>
</template>

<script>
export default {
    methods :{
        changePage: function(){
            this.$emit('changePage', 'signInWanted');
            console.log('Emitting signInWanted');
      }
    }
}
</script>
<style scoped>
 @import "../CSSFiles/Forms.css"
</style>