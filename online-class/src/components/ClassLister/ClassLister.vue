<template>
    <div class="father">
        <div class="mother">
            <div class="child" style="grow" v-for="item in items" v-bind:key="item.classCounter">
                    <ClassListView :classDetails="item"></ClassListView>
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

    data(){
        return{
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
        console.log(this.$store.state.rooms)
        console.log("All Rooms")
        console.log(this.$store.state.rooms.admin)
        this.$store.state.rooms['admin'].forEach(item => {
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