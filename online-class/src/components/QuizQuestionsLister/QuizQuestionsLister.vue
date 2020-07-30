<template>
    <div class="father">
        <div class="mother">
            <div class="child" style="grow" v-for="item in items" v-bind:key="item">
                    <QuizQuestion></QuizQuestion>
            </div>
        </div>

    </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
export default {
    components:{
        QuizQuestion
    },
    props : {

    },

    data(){
        return{
            items : [1,2,3,4,5,6,7],

        }
    }
}
</script>

<style scoped>
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
}

.child:hover{
    background-color: gold;
}
</style>