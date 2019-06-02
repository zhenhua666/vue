<template>
 <div>
    <h1>设置</h1>
 <User :users='users'></User>
 <User @changetitle='uptitle'></User>
 <h2>{{title}}</h2>
 </div>
</template>

<script>
import User from '@/components/user'
 export default {
   data () {
     return {
       users:['电信','移动','联通'],
       title:'变成子组件传来的值'
     }
   },
   components: {
     User
   },
   methods:{
     uptitle(e){
       this.title = e;
     }
   }
 }
</script>

<style>

 
</style>
