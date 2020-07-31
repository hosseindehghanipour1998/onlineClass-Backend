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
                        <SideBar  v-on:ComponentRouter="updatePage($event)"></SideBar>
                    </div>

                    <div  id="rightbox">

                        <div v-if=" pageNo === availableComponents.Account">
                            <EditProfileForm></EditProfileForm>
                        </div>


                        <div v-if=" pageNo === availableComponents.ListUsersLayout">
                            <UserListerLayout ></UserListerLayout>
                        </div>

                        <div v-if=" pageNo === availableComponents.ListQuizesLayout">
                            <QuizesLister ></QuizesLister>
                        </div>

                        <div v-if=" pageNo === availableComponents.CreateCourseLayout">
                            <CreateClassForm ></CreateClassForm>
                        </div>


                        <div v-if=" pageNo === availableComponents.JoinClassLayout">
                            <JoinClassForm ></JoinClassForm>
                        </div>

                        <div v-if=" pageNo === availableComponents.CreateQuizLayout">
                            <CreateQuizLayout ></CreateQuizLayout>
                        </div>

                        <div v-if=" pageNo === availableComponents.ListCoursesLayout">
                            <ClassLister ></ClassLister>
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
import QuizesLister from '../QuizesLister/QuizesLister.vue';
import CreateClassForm from '../CreateClassForm/CreateClassForm.vue';
import JoinClassForm from '../JoinClassForm/JoinClassForm.vue';
import QuizQuestion from '../QuizQuestionsLister/QuizQuestion.vue';
import QuizQuestionsLister from '../QuizQuestionsLister/QuizQuestionsLister.vue';
import CreateQuizLayout from '../CreateQuizLayout/CreateQuizLayout.vue';
import Particles from '../Particles/Particles.vue';
import ClassLister from '../ClassLister/ClassLister.vue';
export default {
    components: {
        SideBar,
        Header,
        EditProfileForm,
        UserListView,
        UserListerLayout,
        QuizesLister,
        CreateClassForm,
        JoinClassForm,
        QuizQuestion,
        QuizQuestionsLister,
        CreateQuizLayout,
        Particles,
        ClassLister

    },
    /*
      Create Quiz
    X List Quizes
    X Create Class
      List Classes
    X Join Class
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
                JoinClassLayout : "8",
                Test : '+'
            },
            pageNo : '+',



        }
    },
    created(){
            // fetch the data when the view is created and the data is
            // already being observed

        },
    // beforeDestroy() {
    //     localStorage.removeItem('token');
    // },
    computed: {
        activeComponent: function () {
            // `this` points to the vm instance
            return availableComponents.EditProfileLayout;
        },
    },
    methods:{
        updatePage : function(wantedPage){
            if ( wantedPage === 'AccountWanted'  ){
                this.pageNo = this.availableComponents.Account;
            }

            if ( wantedPage === 'LogOutWanted' ){
                //this.pageNo == this.availableComponents.Test;
                localStorage.removeItem('token');
                this.$store.state.user.isLoggedIn = false;
                this.$router.push('/login/');
            }

            if( wantedPage === "LU" ){
                //List Users
                this.pageNo = this.availableComponents.ListUsersLayout;
            }

            if( wantedPage === "LQ" ){
                //List Quizes
                this.pageNo = this.availableComponents.ListQuizesLayout;
            }
            if( wantedPage === "CC" ){
                // Create Class
                this.pageNo = this.availableComponents.CreateCourseLayout;
            }
            if( wantedPage === "JC" ){
                //Join Class
                this.pageNo = this.availableComponents.JoinClassLayout;
            }

            if( wantedPage === "CQ" ){
                //Join Class
                this.pageNo = this.availableComponents.CreateQuizLayout;
            }
            if( wantedPage === "LC" ){
                //Join Class
                this.pageNo = this.availableComponents.ListCoursesLayout;


            }
            if( wantedPage === "RB" ){
                //Join Class
                this.pageNo = this.availableComponents.ListCoursesLayout;
                this.$store.state.classStatus = false ;

            }
            else{
                this.pageNo == "+";
            }
        }
    },
    computed:{
        classStatus(){
            return this.inClassStatus
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
.bg-transparent {
    background-color: transparent;
}

</style>