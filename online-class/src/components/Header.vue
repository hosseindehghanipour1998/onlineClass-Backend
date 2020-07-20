<template>
    <nav>
        <ul>
            <!-- <li><img src="./search.png"/></li> -->
            <div class="dropdown">
                <li>

                    <p><img src="./menu.png" style="width:30px;height:30px; padding-top:5px;"></p>
                    <div class="dropdown-content">
                        <a href="#">Log Out</a>
                        <a href="#">Account</a>
                    </div>
                </li>
            </div>
            <li><router-link to="/" exact><p>Search</p></router-link></li>
            <li><router-link to="/" exact><p>Notifications</p></router-link></li>


        </ul>
    </nav>
</template>


<script>
export default {}
</script>


<style scoped>
@import './Header/style.css';

nav{
    border-radius: 15px;
}
ul{
    list-style-type: none;
    text-align: right;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    color:papayawhip;
}


p{
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

p:hover{
    background: #eee;
    transform: scale(1.1);
    transition-duration: 0.4s;
    border: 1px solid;
    border-radius: 10px;
    color: black !important;
    padding: 10px;
}

nav{
    background: #444;
    padding: 10px 0;
}



.router-link-active{
    background: #eee;
    color: #444;
}




.dropdown {

  position: relative;
  display: inline-block;
}

.dropdown-content {

  display: none;
  position: absolute;
  left: -1px;
  background-color: #444;
  color: #eee !important;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd; border: 10px; color:black; }

.dropdown:hover .dropdown-content {display: block;}

</style>
