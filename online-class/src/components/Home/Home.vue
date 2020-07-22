<template>

    <div id = "father" style="">

        <div  style="width:100%;height:100%;">


                <div id="upperRow"  >
                    <div id="header">
                        <Header v-on:ComponentRouter="updatePage($event)"></Header>
                    </div>
                </div>

                <div id="lowerRow"  >

                    <div id="leftbox">
                        <SideBar></SideBar>
                    </div>

                    <div  id="rightbox">
                        <UserListerLayout></UserListerLayout>
                    </div>


                </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../VerticalList/SideBar.vue' ;
import Header from '../Header/Header.vue' ;
import EditProfileForm from '../EditProfileForm.vue';
import UserListView from '../UserListView/UserListView.vue';
import UserListerLayout from '../UserListerLayout/UserListerLayout.vue'
export default {
    components: {
        SideBar,
        Header,
        EditProfileForm,
        UserListView,
        UserListerLayout
    },

    data(){
        return{
            availableComponents : {
                EditProfileLayout : "2",
                ListCoursesLayout : "3",
                ListQuizesLayout : "4",
                CreateClassesLayout : "5"
            },
            pageNo : '0',

        }
    },
    created(){
            // fetch the data when the view is created and the data is
            // already being observed

        },
    computed: {
        activeComponent: function () {
            // `this` points to the vm instance
            return availableComponents.EditProfileLayout;
        },
    },
    methods:{
        updatePage : function(wantedPage){
            if ( wantedPage === 'AccountWanted'  ){
                this.pageNo = '2';
            }

            if ( wantedPage === 'LogOutWanted' ){
                this.pageNo == '0';
            }

            else{
                this.pageNo == '0';
            }
        }
    }

}
</script>

<style scoped>
@import './styles.css';
.courier {
    width:100%;
    height:100%;
}

</style>