<template>
    <div class="father">
        <div class="LittleBrother">
            <input class="inputStyle" style="width:60%; min-height:3%;" v-model="exam.title" placeholder="Quiz Name" required/>
            <input class="inputStyle" type="number" style="width:60%; min-height:3%;" v-model="exam.room" placeholder="Class ID" required/>
<!--
            <div class="row">

                <div class="column">
                    From :
                    <input v-model="this.start_date" class="inputStyle2" type="date"   />
                </div>

                <div class="column">
                     To :
                    <input class="inputStyle2" type="datetime-local"   />
                </div>
            </div> -->

        </div>
        <hr class="vl"/>

        <div class="mother" v-for="question in this.inputs" :key="question.number">
            <div class="oldBrother">
                <span class="leftSpan">
                    <CreateQuizLayoutQuestion  :passedQuestion="question"> </CreateQuizLayoutQuestion>
                </span>
                <span class="rightSpan">
                    <button class="buttonStyle" @click="remove(question.number)" v-show="question.number || ( !question.number && inputs.length > 1)">Remove  </button>
                    <button class="buttonStyle" @click="add()" v-show="question.number-1 == inputs.length-1"> Add</button>
                </span>
            </div>

        </div>
        <div class="row">
            <button class="glow-on-hover column " v-on:click="submitExam()" style="width:60%;margin:2px;" > Create </button>
            <button class="glow-on-hover column"  v-on:click="draftExam()" style="width:60%;margin:2px;" > Draft </button>
            <button class="glow-on-hover column"  v-on:click="resetExam()" style="width:60%;margin:2px;" > Reset </button>
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
            exam :{
                title : '',
                room : "" ,
                questions : []

            },
            globalQuestionCounter : 1 ,
            inputs: [
                {
                    number : 1,
                    text : "",
                    solution : "",
                    credit : 1
                }
            ],
        }

    },
    methods: {
        add() {
            console.log(this.globalQuestionCounter);
            this.globalQuestionCounter ++ ;
            this.inputs.push({
                    number :  this.globalQuestionCounter,
                    text : "",
                    solution : "",
                    credit:1
                });

        },
        remove(index) {
            if ( index > 1 || this.globalQuestionCounter > 1 ){
                console.log(`Delete at index : ${index-1}`)
                this.inputs.splice(index-1, 1);
                this.globalQuestionCounter--;
                for ( let i = 0 ; i < this.inputs.length; i++){
                    this.inputs[i].number = i+1;
                }
            }
        },
        submitExam() {
            if ( this.exam.room == "" || this.exam.title== "" ) {
                alert("Fill Exam Title and Class ID")
            }
            else {
                //this.$store.dispatch('getRoom',this.exam.room)
                let payload = this.exam
                payload.room = parseInt(payload.room)
                payload.questions = this.inputs
                console.log(payload)
                //this.$store.dispatch('fetchCreate', payload)
                this.$store.dispatch('createExam', payload)
                this.resetExam();
            }

        },
        draftExam() {
            let payload = this.exam
            payload.questions = this.inputs
            localStorage.setItem("draftExam",JSON.stringify(payload))

            console.log("Saved Global Question Counter")
            if ( this.globalQuestionCounter <= 0 ){
                this.globalQuestionCounter = 1;
            }
            console.log(this.globalQuestionCounter)
            localStorage.setItem("GlobalCounter",this.globalQuestionCounter)
            localStorage.setItem("Draf","1")

        },
        resetExam(){
            localStorage.removeItem("draftExam")
            localStorage.removeItem("Draf")
            localStorage.removeItem("GlobalCounter")
            this.globalQuestionCounter = 1 ;

            this.exam.title = ''
            this.exam.room = ''
            this.inputs = [
                {
                    number : 1,
                    text : "",
                    solution : "",
                    credit:1
                }
            ]
        },
        retriveIfPossible(){
            let anyDrafts = localStorage.getItem("Draf") ;
            if (anyDrafts == "1"){
                let payload =JSON.parse(localStorage.getItem("draftExam"))
                this.exam.title = payload.title;
                this.exam.room = payload.room;
                this.inputs = payload.questions;
                let number  = parseInt(localStorage.getItem("GlobalCounter"))
                this.globalQuestionCounter = number
                console.log("Retrieved Global Question Counter")
                console.log(number)
        }
        }
    },// end of methods

    mounted(){
        this.retriveIfPossible();
    }
}
</script>

<style scoped>
.vl {
  border: 2px solid white;
  width: 100%;
}

.row {
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

}

.inputStyle2 {
    color: blanchedalmond ;
    background-color: #9dc5c3;
    background-image: linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    margin:2px;
    font-size: 1.5rem;
    border-radius: 5px;
    text-align: center;
}
.inputStyle2:hover {
    background-color: #ffa69e;
    background-image: linear-gradient(315deg, #ffa69e 0%, #5d4954 74%);

}

.column{
    width:25% !important;
    height: auto;
    justify-content: space-evenly;
    margin:5px !important;
    padding:3px !important;
    color: #9dc5c3;
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
    border-radius: 8px;
	background-color: #01142F ;
    background-color: #01142F!important;
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    margin:2px;
    text-align:center;
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