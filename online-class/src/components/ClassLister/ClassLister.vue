<template>
    <div class="father">
        <div  class="buttonChild " v-if="this.showUserData" >
            <button class="glow-on-hover" v-on:click="backButtonClick" >Back</button>

        </div>
        <hr/>
        <div v-if="!this.showUserData" class="mother">
            <div v-on:click="roomOnclick(item)" class="child" style="grow" v-for="item in items" v-bind:key="item.classCounter">
                    <ClassListView :classDetails="item" ></ClassListView>
            </div>
        </div>


        <div v-if="this.showUserData" class="mother">
            <UserListerLayout :classID="this.selectedRoomId" ></UserListerLayout>
        </div>

    </div>
</template>

<script>
import ClassListView from './ClassListView.vue';
import UserListerLayout from '../UserListerLayout/UserListerLayout.vue';
export default {
    components:{
        ClassListView,
        UserListerLayout
    },
    props : {
    },

    methods:{
        backButtonClick(){
            this.showUserData = false;
        },

        fetchData(item){
            this.$store.dispatch('getRoomUsers',item.classData)
        },
        changeState(){
            this.showUserData = true
        },
        roomOnclick(item){
            //console.log("Clicked on the Room => item")
            //console.log(item.classData
            //var p = new Promise((this.fetchData(item), this.changeState()) )
            this.selectedRoomId = item.classData.id
            //console.log(this.selectedRoomId)
            // console.log("Selected Room Id")
            // console.log(item.classData.id)
            this.fetchData(item)
            this.changeState()
        }
    },


    data(){
        return{
            showUserData : false ,
            globalCounter : 1,
            items : [

                // {
                //     classIndex : 0,
                //     className : "" ,
                //     classDescription : "",
                //     classHash : "" ,
                // }
            ],
            selectedRoomId : null ,

        }
    },
    mounted(){
        this.$store.dispatch('getUserRooms')
        //console.log(this.$store.state.rooms['admin'].length)
        //console.log("Rooms (ClassLister)")
        //console.log(this.$store.state.rooms)
        //console.log(this.$store.state.rooms.admin)
        this.$store.state.rooms['admin'].forEach(item => {
            // console.log("ClassInfo")
            // console.log(item)
            this.globalCounter ++ ;
            this.items.push(
                {
                    classCounter : this.globalCounter ,
                    classData : item,
                    UserRole : "Admin"
                }
            );
        })
        this.$store.state.rooms['participated'].forEach(item => {
            //console.log("Participant")
            //console.log(item)
            this.globalCounter ++ ;
            this.items.push(
                {
                    classCounter : this.globalCounter ,
                    classData : item,
                    UserRole : "Participant"
                }
            );
        })


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
.mother{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:99%;
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