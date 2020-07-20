<template>

    <div class="Verticaltemplate">
        <h2>Dashboard</h2><hr/>
        <ul class="myList">
            <li v-for="(item) in sideBarItems" v-bind:key="item" >
                    <h3>{{item.title}}</h3><br/>
                    <ul>
                        <li v-for="string in item.sublist " v-bind:key="string">
                            {{string}}
                        </li>
                    </ul>
            </li>

        </ul>
    </div>
</template>


<script>
export default {
    props: {

    },
    data() {
        return{
            sideBarItems : [
               {
                   title : "Quizes" ,
                   sublist:["Create Quiz","List Quizes"]
               },
               {
                    title : "Classes" ,
                    sublist:["Create Class" , "List Classes"]
                },
               {
                   title : "Users" ,
                   sublist:["Create User" , "List Users"]
                },
            ],
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
    padding: 30px;
    font-size: 40px;

}

li{
    display: flex;
    border-radius: 10px;
    padding: 40px;
    margin: 20px;
    align-content: flex-start;

}

li:hover{
transition-duration: 0.4s;
    color: black;
}

li:hover::before {
  -webkit-border-radius: 1em;
  border-radius: 1em;
  background-color: wheat;
}






.myList {
  list-style: none;

}

 li {
  text-transform: capitalize;
  font-size: 1.5em;
  font-family: sans-serif;
  padding: 1em;
}

li.selected {
  color: wheat;
}

 li:before {
  display: inline-block;
   content: '';
   height: 5rem;
   width: 5rem;
   margin-right: 1em;
}

 li.selected:before {
  -webkit-border-radius: 1em;
  border-radius: 1em;
}
li li:hover{
    color: purple;
}
</style>