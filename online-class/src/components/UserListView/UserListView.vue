<template>
    <div id="father">
        <div id="imageChild">
            <img v-bind:src="jjj" class="perosnImage" />
        </div>

        <div id="infoChild">
            <h1 class="inputStyle">{{userInfo['data'].user.first_name}} - {{userInfo.data.user.last_name}}</h1>
            <textarea class="inputStyle" rows="2" :value="userInfo.data.user.email" disabled></textarea>
            <h1 class="inputStyle"> Username : {{userInfo.data.user.username}} </h1>
            <input
                class="inputStyle rowItem"
                style="width : 50% ; color : cyan; text-align:center;"
                :value="'Role : ' +  userInfo.role + ' | ID : ' + userInfo.data.id"
                disabled>


        </div>

        <div class="iconHolder">
            <!-- <img src="./actions.png" class="icon"/> -->
            <button class="glow-on-hover icon" v-on:click="promoteToAdmin(roomID , userInfo)"  >P</button>
            <button class="glow-on-hover icon"  v-on:click="showConsole(userInfo)"   > - </button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        userInfo : {
            type:Object,
            required:true,
        },
        roomID : {
            type:Number,
            required : true,
        }

    },
    data(){
        return{
            jjj:"data:image/png;base64,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",
        }
    },
    methods :{
        promoteToAdmin(x,y){
            console.log(y)
            let userID =  y.data.id
            let roomID = x
            console.log(x)
            this.$store.dispatch('addAdmin',{roomID , userID })
        },
        showConsole(x){
            console.log("Room ID")
            console.log(x)
        }
    }
}
</script>

<style scoped>
@import '../../CSSFiles/glowButtonStyle.css';
.finalRow{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.rowItem{
    width: 50% !important;
}
textarea{
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    resize: none;
}
.inputStyle {
    color: blanchedalmond ;
    border-radius: 8px;
	background-color: #01142F ;
    background-color: #01142F;
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    min-width: 100%;
    width: auto;
    padding:3px;
    font-size: 1rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#father{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border-radius: 5px;

}

.perosnImage{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-radius: 5px;
    width: 60%;
    height: auto;

}

#imageChild{
    width: 40%;
    height: 100%;
    padding:2px;
}

#infoChild{
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    height: 100%;
    width : 40%;
    text-align: center;
}

.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    order:1;
    width: 40px;
    height: 40px;
    border:1px solid black;
    margin : 3px;
    ;
}
h1{
    padding:2px;

}

.iconHolder{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-items: flex-end;
    width: 20%;
    height: 100%;


}





</style>