<template>
    <div class="father">
        <div class="child" v-for="item in items" v-bind:key="item">
                <UserListView></UserListView>
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
        allUsers : [
                {Name : "Hossein Dehghanipour" , Email:"XXX@gmail.com" , id:"123"},
                {Name : "Mohammad Dehghanipour" , Email:"YYY@gmail.com" , id:"456"},
                {Name : "Reza Dehghanipour" , Email:"ZZZZ@gmail.com" , id:"789"},
                {Name : "gholam Dehghanipour" , Email:"BBB@gmail.com" , id:"5657"}
            ]
    },

    data(){
        return{
            items : [1,2,3,4,5,6,7],

        }
    }
}
</script>

<style scoped>
.father {
    margin:2px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
}
.father::webkit::-webkit-scrollbar{
    display: none;
}

.child{
    padding: 2px;
    width: auto;
    height: auto;

}
</style>