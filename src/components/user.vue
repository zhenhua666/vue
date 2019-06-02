<template>
 <div>
   <p>
     {{ $route.name }}
   </p>  
   <ul>
     <li v-for="val in users" :key="val">
       {{val}}
     </li>
   </ul>
   <h1 @click="change">{{tit}}</h1>
 </div>
</template>

<script>

 export default {
props:{
  users:{
    type:Array,
    required:true
  }
},
   data () {
     return {
       tit:'vue onclick'
     }
   },
   components: {
   },
   methods:{
     change(){
       this.$emit('changetitle','子组件传递的值')
     }
   },
   beforeRouteEnter:(to, from, next)=> {
     console.log('准备进入路由');
     next();
   },
   beforeRouteLeave:(to, from, next) => {
     console.log('准备离开路由');
     next();
   }
 }
</script>

<style>

 
</style>
