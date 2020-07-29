<template>
    <div id="father">


        <div id="infoChild">
            <input class="inputStyle" disabled :value="'Class Title : ' + classDetails.classData.name">
            <input class="inputStyle" disabled :value="'Class Link : ' + classDetails.classData.link">
            <textarea class="inputStyle pa2 " style="resize: none;color:red;" rows="6"  disabled :value="classDetails.classData.description"></textarea>
            <input class="inputStyle" style="width : 20% ; color : cyan; text-align:center;" disabled :value="classDetails.UserRole">

        </div>

        <div class="iconHolder">
            <img src="./actions.png" class="icon"/>
        </div>
    </div>
</template>

<script>
export default {

    props :{
        classDetails: {
            type: Object,
            required: true
      }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.inputStyle {
    color: blanchedalmond ;
    border-radius: 5px;
	background-color: #01142F ;
    background-color: #01142F;
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    margin:3px;
    font-size: 1rem;
    padding:2px;
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


#infoChild{
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    height: 100%;
    width : 80%;
    text-align: center;
}

.icon{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    order:1;
    width: 40px;
    height: 40px;
    background-color: white;
    border:1px solid black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    border-radius: 50%;
}
h1{
    padding:2px;

}

.iconHolder{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 20%;
    height: 100%;


}
</style>