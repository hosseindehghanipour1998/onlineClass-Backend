<template>
    <div id="father">
        <div id="imageChild">
            <img   class="perosnImage" />
        </div>

        <div id="infoChild">
            <h1 class="inputStyle" > John Doe </h1>
            <h1 class="inputStyle" > Hossein.dehghanipour1998@gmail.com </h1>
            <h1 class="inputStyle" > id : 22345 </h1>
        </div>

        <div class="iconHolder">
            <img src="./actions.png" class="icon"/>
        </div>
    </div>
</template>


<style scoped>
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

#father{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.perosnImage{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 50%;
    margin: 10%;
    width: 80%;
    height: 80%;
}

#imageChild{
    width: 40%;
    height: 100%;
    padding:2px;
}

#infoChild{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 100%;
    width : 40%;
}

.icon{
    display: flex;
    flex-direction: column;
    order:1;
    width: 80px;
    height: 80px;
    margin: 8px;
    background-color: white;
    border:5px solid black;
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