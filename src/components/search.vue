<template>
 <div>
   <p>
     {{ $route.name }}
     {{ msg }}
     <br/>
     <input type="text" v-model="msg">
   </p>
   <input type="checkbox" id="one" value="one" v-model="demo">
   <label for="one">first</label>  
   <input type="checkbox" id="two" value="two" v-model="demo">
   <label for="two">second</label>  
   <input type="checkbox" id="three" value="three" v-model="demo">
   <label for="three">third</label>
   <p>{{demo}}</p>  
 <input type="radio" id="x" value="x" v-model="z">
 <label for="x">xx</label>
 <input type="radio" id="y" value="y" v-model="z">
 <label for="y">yy</label>
 <p>{{z}}</p>
 <div class="transform"></div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       msg:"It's ok",
       demo:[],
       z:''
     }
   },
   components: {

   }
 }
</script>

<style scope>
.transform{
  width: 66px;
  height: 66px;
  background-color:skyblue;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s;
}
.transform:hover{
  transform: scale(1.3)
}
</style>
