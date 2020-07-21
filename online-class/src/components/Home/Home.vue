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
                        <EditProfileForm></EditProfileForm>
                    </div>

                </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../VerticalList/SideBar.vue' ;
import Header from '../Header/Header.vue' ;
import EditProfileForm from '../EditProfileForm.vue'
export default {
    components: {
        SideBar,
        Header,
        EditProfileForm
    }

}
</script>

<style scoped>



#father{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

#header {
    padding-right: 40px;
    margin-right: 30px;
}

#leftbox {
      width: 15%;
      height: 100%;
      margin-left: 30px;
}
#rightbox{
      width: 85%;
      height: 100%;
      background-color:rgb(39,41,61);
      margin-left: 30px;
      margin-right:30px;
   /* background-color:purple;*/

}
#upperRow{
    width: 100%;
    margin:0;
    height: 80px;
}

#lowerRow {
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);

    /*background-color:pink;*/
}
</style>