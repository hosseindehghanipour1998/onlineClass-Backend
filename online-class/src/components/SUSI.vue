<template>
<div class="susi " >
    <div v-if="SignInActivated"  ><SignIn v-on:changePage="updatePage($event)"></SignIn></div>
    <div v-else-if="!SignInActivated" ><SignUp v-on:changePage="updatePage($event)"></SignUp></div>
</div>
</template>

<script>
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'

export default {
    data() {
        return {
            SignInActivated : true ,
        }

    },
    methods:{
        updatePage(inputData){
            console.log('Receiving ');
            if (inputData === "signInWanted" ){
                this.SignInActivated = true;
            }

            if(inputData === "signUpWanted"){
                 this.SignInActivated = false;
            }
        }

    },
    components: { SignIn , SignUp}
}

</script>

<style scoped>
.susi{
    width: 100%;
    height: 100%;
}
</style>