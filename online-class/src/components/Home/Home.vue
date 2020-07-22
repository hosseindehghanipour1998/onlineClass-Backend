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
                        <div class="courier" v-if=" xxx === availableComponents.EditProfileLayout " >
                             <EditProfileForm></EditProfileForm>
                        </div>


                        <div class="courier" v-else-if="xxx === availableComponents.ListCoursesLayout">
                        </div>

                        <div class="courier" v-else-if="xxx === availableComponents.ListQuizesLayout">
                        </div>

                        <div class="courier" v-else-if="xxx === availableComponents.CreateClassesLayout">
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
                EditProfileLayout : 2,
                ListCoursesLayout : 3,
                ListQuizesLayout : 4,
                CreateClassesLayout : 5
            },



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
        xxx: function (){
            return 5 ;
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