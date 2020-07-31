<template>
    <div class="father">
        <div class="mother">
            <div  class="belowMother" v-for="(item,index1) in this.$store.state.roomsForExams" v-bind:key="index1">
                    <div class="child"   v-for="(exam,index2) in item['exams']" v-bind:key="index2" v-show="item['exams'].length != 0"  style="width:100%;height:100%;">
                        <EachQuizLayout :examData="exam" :roomData="item['room']" ></EachQuizLayout>
                    </div>
            </div>
        </div>

    </div>
</template>

<script>
import EachQuizLayout from './EachQuizLayout.vue';

export default {
    components:{
        EachQuizLayout,

    },
    props : {
        allUsers : [
                {Name : "Hossein Dehghanipour" , Email:"XXX@gmail.com" , id:"123"},
                {Name : "Mohammad Dehghanipour" , Email:"YYY@gmail.com" , id:"456"},
                {Name : "Reza Dehghanipour" , Email:"ZZZZ@gmail.com" , id:"789"},
                {Name : "gholam Dehghanipour" , Email:"BBB@gmail.com" , id:"5657"}
            ]
    },

    methods :{
        log(item){
            console.log("Child Clicked on")
            console.log(item)
        }
    },

    data(){
        return{
            items : [1,2,3,4,5,6,7],

        }
    },
    mounted(){
        this.$store.dispatch('getRoomsExams')
        console.log("All")
        console.log(this.$store.state.rooms)

    }
}
</script>

<style scoped>
.belowMother{
    width: 60%;
    height: auto;
}
.mother{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:100%;
}

.father {
    display: flex;
    justify-content: center;
    align-items: center;
    margin:2px;
    height: 100%;
    width: 100%;
    /*overflow-y: scroll;*/
}


.child{
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 2px;
    width: 100%;
    height: auto;
    border:2px solid white;
    border-radius: 5px;
    background-color:gray ;
    cursor: pointer;
}

.child:hover{
    background-color: gold;
}
</style>