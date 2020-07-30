<template>
    <div class="father">
        <div v-if="!this.showUserData" class="mother">
            <div v-on:click="roomOnclick(item)" class="child" style="grow" v-for="item in items" v-bind:key="item.classCounter">
                    <ClassListView :classDetails="item" ></ClassListView>
            </div>
        </div>

    </div>
</template>

<script>
import ClassListView from './ClassListView.vue';
export default {
    components:{
        ClassListView
    },
    props : {
    },

    methods:{

        roomOnclick(item){
            //console.log("Clicked on the Room => item")
            //console.log(item.classData)
            this.$store.dispatch('getRoomUsers',item.classData)
            console.log("Room information : ")
            console.log(this.$store.state.specificRoom)
            this.showUserData = true;
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

        }
    },
    mounted(){
        this.$store.dispatch('getUserRooms')
        //console.log(this.$store.state.rooms['admin'].length)
        //console.log("Rooms (ClassLister)")
        //console.log(this.$store.state.rooms)
        //console.log(this.$store.state.rooms.admin)
        this.$store.state.rooms['admin'].forEach(item => {
            //console.log(item)
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