<template>
<div class="father">

<div class="LittleBrother">
    <input class="inputStyle" style="width:60%; min-height:3%;" placeholder="Quiz Name" />
    <input class="inputStyle" style="width:60%; min-height:3%;" placeholder="Class Hashcode" />

</div>
<hr class="vl"/>

 <div class="mother" v-for="question in this.inputs" :key="question.questionNo">
     <div class="oldBrother">
        <span class="leftSpan">
            <CreateQuizLayoutQuestion  :passedQuestion="question"> </CreateQuizLayoutQuestion>
        </span>
        <span class="rightSpan">
            <button class="buttonStyle" @click="remove(question.questionNo)" v-show="question.questionNo || ( !question.questionNo && inputs.length > 1)">Remove  </button>
            <button class="buttonStyle" @click="add()" v-show="question.questionNo-1 == inputs.length-1"> Add</button>
        </span>
    </div>

</div>
<div class="LittleBrother">
    <button class="glow-on-hover" style="width:60%;"> Create </button>
</div>

</div>
</template>

<script>
import CreateQuizLayoutQuestion from "./CreateQuizLayoutQuestion.vue";
export default {
    components:{
        CreateQuizLayoutQuestion,
    },
    data(){
        return{
            globalQuestionCounter : 1 ,
             inputs: [
                {
                    questionNo : 1,
                    text : "",
                    answerText : "",
                }
            ]
        }

    },
    methods: {
        add() {
            console.log(this.globalQuestionCounter);
            this.globalQuestionCounter ++ ;
            this.inputs.push({
                    questionNo :  this.globalQuestionCounter,
                    text : "",
                    answerText : "",
                });

        },
        remove(index) {
            if ( index > 1 ){
                console.log(`Delete at index : ${index-1}`)
                this.inputs.splice(index-1, 1);
                this.globalQuestionCounter--;
                for ( let i = 0 ; i < this.inputs.length; i++){
                    this.inputs[i].questionNo = i+1;
                }
            }
        },
        createQuiz(){

        }
    }
}
</script>

<style scoped>
.vl {
  border: 2px solid white;
  width: 100%;
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
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid #008CBA;
  margin:4px;
}

.buttonStyle:hover {
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
  color: black !important;
}

.father{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
    width: 100%;
    height: 100%;
}
.mother{
    width: 80%;
    height: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 2px;
    width: 60%;
    height: auto;
    border:2px solid white;
    border-radius: 5px;
    background-color:gray ;
}

.mother:hover{
    background-color: gold;
}

div{
    width:100%;
    height:100% px;
}

.leftSpan{
    width: 90%;
}

.rightSpan{
    width: 10%;
    margin-left : 2px;
}
.inputStyle {
    color: blanchedalmond !important;
    border-radius: 12px;
	background-color: #01142F ;
    background-color: #01142F!important;
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    margin:2px;
    font-size: 1.5rem;
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
</style>