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
                        <SideBar v-on:ComponentRouter="updatePage($event)"></SideBar>
                    </div>

                    <div  id="rightbox">

                        <div v-if=" pageNo === availableComponents.Account">
                            <EditProfileForm></EditProfileForm>
                        </div>


                        <div v-if=" pageNo === availableComponents.ListUsersLayout">
                            <UserListerLayout ></UserListerLayout>
                        </div>

                        <div v-if=" pageNo === availableComponents.ListQuizesLayout">
                            <!-- Test Mode -->
                            <QuizListerView ></QuizListerView>


                        </div>

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
import UserListerLayout from '../UserListerLayout/UserListerLayout.vue';
import QuizListerView from '../QuizListerView/QuizListerView.vue';
export default {
    components: {
        SideBar,
        Header,
        EditProfileForm,
        UserListView,
        UserListerLayout,
        QuizListerView
    },
    /*
      Create Quiz
      List Quizes
      Create Class
      List Classes
      Create User
    X List Users
    X Account
      LogOut

    */
    data(){
        return{
            availableComponents : {
                Account : "2", //Account
                ListCoursesLayout : "3",
                ListQuizesLayout : "4",
                ListUsersLayout : "7",
                CreateCourseLayout : "5",
                CreateQuizLayout : "6",


            },
            pageNo : '9',

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
                this.pageNo = "2";
            }

            if ( wantedPage === 'LogOutWanted' ){
                this.pageNo == "-1";
            }

            if( wantedPage === "LU" ){
                this.pageNo = "7";
            }

            if( wantedPage === "LQ" ){
                this.pageNo = "4";
            }

            else{
                this.pageNo == "0";
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