<template>

    <div id = "father" style="">

        <div  style="width:100%;height:100%;">


                <div id="upperRow"  >
                    <div id="header">
                        <Header></Header>
                    </div>
                </div>

                <div id="lowerRow"  >

                    <div id="leftbox">
                        <SideBar></SideBar>
                    </div>

                    <div  id="rightbox">
                        <div class="courier" v-if="activeComponent === availableComponents.EditProfileLayout " >
                            <EditProfileForm></EditProfileForm>
                        </div>

                        <div class="courier" v-else-if="activeComponent === availableComponents.ListCoursesLayout">
                        </div>


                        <div class="courier" v-else-if="activeComponent === availableComponents.ListQuizesLayout">
                        </div>

                        <div class="courier" v-else-if="activeComponent === availableComponents.CreateClassesLayout>
                            <UserListView></UserListView>
                        </div>


                    </div>

                </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../VerticalList/SideBar.vue' ;
import Header from '../Header/Header.vue' ;
import EditProfileForm from '../EditProfileForm.vue'
import UserListView from '../UserListView/UserListView.vue'
export default {
    components: {
        SideBar,
        Header,
        EditProfileForm,
        UserListView
    },

    data(){
        return{
            availableComponents : {
                EditProfileLayout : "EditProfileLayout",
                ListCoursesLayout : "ListCoursesLayout",
                ListQuizesLayout : "ListQuizesLayout",
                CreateClassesLayout : "CreateClassesLayout"
            },

            activeComponent = null ,

        }
    },
    created(){
            // fetch the data when the view is created and the data is
            // already being observed
            this.activeComponent = availableComponents.EditProfileLayout ;
        },

}
</script>

<style scoped>
@import './styles.css';
.courier {
    width:100%;
    height:100%;
}

</style>