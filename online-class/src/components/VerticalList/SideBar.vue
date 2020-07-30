<template>

    <div class="Verticaltemplate">
        <h2>Dashboard</h2><hr/>
        <ul class="myList">
            <li v-for="(item,index) in sideBarItems" :id="index" :key="index" v-on:click="updatePage(item.Emit)" >
                {{item.Text}}
            </li>

        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return{
            sideBarItems :
            [
                {Text : "Create Quiz" , Emit : "CQ"},
                {Text :"List Quizes", Emit : "LQ" },
                {Text :"Create Class", Emit : "CC" },
                {Text :"List Classes", Emit : "LC"},
                {Text :"Join Class", Emit : "JC"},
                {Text :"List Users",Emit : "LU"},
                {Text :"Return Back",Emit : "RB"}
            ],
            selectedButton : 0 ,
            myStyle:{
                backgroundColor:"#16a085"
            }
        }
    },
    methods:{
        updatePage(data,index,item){
            this.$emit("ComponentRouter",data);
            //console.log(data);
        }
    }
}
</script>

<style scoped>
.Verticaltemplate{
    width: 100%;
    height: 100%;
    background-color: rgb(58, 156, 109);
    color: white;
    padding: 2px;
    text-align: center;
    font-size: 0.45rem;
    border-radius: 5px;
    cursor: pointer;
}

li{
    border-radius: 10px;
    text-align: start;
    text-transform: capitalize;
    font-size: 16px;
    font-family: sans-serif;
    padding: 20px 10px;
    margin:10px;
    list-style: none;

}

li:hover{
    transition-duration: 0.4s;
    color: black;
    background-color: blanchedalmond;
}

li:hover::before {
  -webkit-border-radius: 3em;
  border-radius: 3em;
  background-color: wheat;
}

.myList {
  list-style: none;
  padding: 0;
}

 li:before {

   content: '';
   border-radius: 40px;
   height: 0.3rem;
   width: 0.3rem;
}



</style>