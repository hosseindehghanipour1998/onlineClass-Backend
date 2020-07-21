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

.column {
    float:left;
    width: 50%;
    padding: 10px;

  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .full{
      widows: 100%;
      height: 100%;
  }


#leftbox {

    float:left;
    width:20%;
    height:100%;
}
#father{
    display: flex;
    flex:1;
    height:100%;
    max-width:100%;
    margin:10px;
}


#header{
height:100%; width:100%;
}

#rightbox{
    display: flex;
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
    float:right;
    width:75%;
    height:100%;
    background-color:purple;

}
#upperRow{
height:20%;
width:100%;
padding:2px;
}

#lowerRow {
    display: flex;
    flex:1;
    height: 100%;
    width:100%;
    background-color:pink;
}
</style>