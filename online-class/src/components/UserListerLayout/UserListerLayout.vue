<template>
    <div class="father">
        <div class="mother">
            <div class="child" style="grow" v-for="item in this.$store.state.specificRoomMembers" v-bind:key="item.counter">
                    <UserListView :userInfo="item"></UserListView>
            </div>
        </div>

    </div>
</template>

<script>
import UserListView from '../UserListView/UserListView.vue';
export default {
    components:{
        UserListView
    },
    props : {

    },

    data(){
        return{
        }
    },

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