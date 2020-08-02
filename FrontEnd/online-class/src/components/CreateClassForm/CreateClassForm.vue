<template>


<div class="SignInAlignment">
  <form>
        <h3 style="color:white"> Create Class </h3>
        <div class="row">
          <input  class="inputStyle  pa2 inputStyle" type="text" v-model="classRoom.classTitle" placeholder="Class Title ">
        </div>

        <div class="row">
          <input id="columnLeft" class="buttonStyle" v-on:click="createHash" value="Create Hash" >
          <input id="columnRight" class="inputStyle  pa2 inputStyle"  v-model="classRoom.classHash"  placeholder="Hash" disabled>
        </div>
        <div class="otherColumns">
          <textarea class="inputStyle pa2 " name="message" rows="6"  v-model="classRoom.classDescription" style="width:100%;" placeholder="Class Description ..."></textarea>
        </div>

        <div class="row">
          <input class=" inputStyle"  id="MNS"  placeholder="Max No. Of Students" disabled>
          <input class=" buttonStyle"  id="SBTN" v-on:click="saveForm" value="save">
          <input class=" buttonStyle"  id="RBTN" v-on:click="resetForm" value="reset">
        </div>
  </form>
</div>
</template>

<script>
export default {
  data(){
    return{
      classRoom : {
        classHash : "" ,
        classTitle : "",
        classDescription:""
      }

    }
  },
  methods:{
    makeHash(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    createHash(){
      let hash = this.makeHash(20);
      this.classRoom.classHash = hash ;
    },
    resetForm(){
      this.classRoom.classDescription = "" ;
      this.classRoom.classTitle = "" ;
      this.classRoom.classHash = "" ;
    },
    saveForm(){
        event.preventDefault();
        this.$store.dispatch('createRoom',this.classRoom);
        this.resetForm();
        alert("Class Created Successfully");

    }

  }
}
</script>


<style scoped>


.SignInAlignment {
  display: flex;
  flex-direction:column;
  align-items: center;
	font-family: "Comic Sans MS", cursive, sans-serif ;
	width: 100%;
  height: 100%;
  /*box-shadow :0 4px 8px 0 rgb(0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 1);*/
  /*box-shadow :  1 8px 16px 0 rgba(0,0,0,1);*/
  opacity: 1 !important;
}

#MNS {
    width: 25%;
}
#RBTN{
    width: 25%;
}
#SBTN{

    width: 50%;
}

.inputStyle {
    color: white !important;
    border-radius: 12px;
    background-color: #01142F;
	transition-duration: 0.4s;
    border: 2px solid #008CBA;
    width: 100%;
    font-size: 1.5rem;
    padding:8px;
    margin:3px;
}
.row{
  display:flex;
  width:100%;
  height: auto;
}

.buttonStyle:hover {
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
  color: black ;
}
.otherColumns{
  display: flex;
}
#columnLeft{
  width:20% !important;
  height: auto;
}

#columnRight{
  width:80%  !important;
  height: auto;
}

.buttonStyle{
  border-radius: 12px;
  background-color: powderblue;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  align-content: center;
  font-size: 1rem;
  margin: 4px 2px;
  transition-duration: 0.2s;
  cursor: pointer;
  width: 50%;
  border: 2px solid #008CBA;
}


.buttonStyle:active{
  background-color: royalblue;
  color: red;
  box-shadow: 0 5px #666;
  transform: translateY(2px);
}



.inputStyle:hover{
  border-color:purple;
  background-image: linear-gradient(89deg,#3CBA92,#0BA360);
}
</style>