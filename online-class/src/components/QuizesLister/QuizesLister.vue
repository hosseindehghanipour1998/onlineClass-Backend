<template>
    <div class="father">
        <div  class="buttonChild " v-if="this.showUserData" >
            <button class="glow-on-hover" v-on:click="backButtonClick" >Back</button>
        </div>

        <div v-if="!this.showUserData"  class="mother">
            <div @click="examOnclick(item)" class="child" v-for="(item,index1) in this.$store.state.roomsForExams" v-bind:key="index1">
                <EachQuizLayout   :examData="item['exam']" :roomData="item['room']" ></EachQuizLayout>
            </div>
        </div>

        <div v-if="this.showUserData" class="mother">
            <QuizQuestionsLister ></QuizQuestionsLister>
        </div>

    </div>
</template>

<script>
import EachQuizLayout from './EachQuizLayout.vue';
import QuizQuestionsLister from '../QuizQuestionsLister/QuizQuestionsLister.vue';


export default {
    components:{
        EachQuizLayout,
        QuizQuestionsLister

    },
    props : {

    },

    methods :{
        fetchData(payload){
            this.$store.dispatch('getExamQuestions',payload)
        },
        changeState(state){
            this.showUserData = state;
        },
        examOnclick(item){
            let canPaticipate = true ;
            this.$store.state.submittedExams.forEach(sub => {
                if ( item['exam'].id == sub.fields.exam_id) {
                    alert("Can not participate in Quiz")
                    canPaticipate = false;
                }
            })
            if(canPaticipate){
                this.fetchData(item['exam'].id);
                this.changeState(true);
            }

        },
        backButtonClick(){
            this.changeState(false) ;
        }

    },

    data(){
        return{
            isActive : true ,
            showUserData:false ,

        }
    },
    mounted(){
        this.$store.dispatch('getRoomsExams')
        this.$store.dispatch('getSubmittedExams')
        // console.log("All")
        // console.log(this.$store.state.rooms)

    }
}
</script>

<style scoped>
@import '../../CSSFiles/glowButtonStyle.css';
.buttonChild{
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    height: 5%;
    padding:3px;;
    margin:4px;


}
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
    width: 60%;
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