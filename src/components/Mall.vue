<template>
 <div>
		<router-view />
  
     <van-tabbar v-model="active" @change="changeTabbar(active)">
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="search" dot>搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o" info="5">个人</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20">设置</van-tabbar-item>
    </van-tabbar>
 </div>
</template>

<script>

 export default {
   data () {
     return {
       active:0
     };
   },
   created(){
     this.changeT()
   },
   methods:{
     changeT(){
       this.nowPath = this.$route.path
       if(this.nowPath == '/search'){
         this.active = 1;
       }else if(this.nowPath == '/user'){
           this.active = 2;
       }else if(this.nowPath == '/set'){
           this.active = 3;
       }
     },
     changeTabbar(active){
       switch (active) {
         case  0:
           this.$router.push({
             name:'Home'
           })
           break;
         case  1:
           this.$router.push({
             name:'Search'
           })
           break;
         case  2:
           this.$router.push({
             name:'User'
           })
           break;
         case  3:
           this.$router.push({
             name:'Set'
           })
           break;      
       }
     }
   }
 }
</script>

<style>
body{
  text-align: center
}
</style>
