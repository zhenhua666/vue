<template>
  <div>
    <h3>{{count}}</h3>
    <p>
      <van-button type="info" @click="add(3)"> Mutation增加 </van-button>
      <van-button type="info" @click="reduce(-2)"> Mutation减少 </van-button>
    </p>
    <p>
      <van-button type="info" @click="addAction"> Action增加 </van-button>
      <van-button type="info" @click="reduceAction"> Action减少 </van-button>
    </p>
    <div class="king">
<div class="player-layout">
  <div class="group group1">
    <div class="player1 palyer"></div>
    <div class="player2 palyer"></div>
    <div class="player3 palyer"></div>
    <div class="player4 palyer"></div>
    <div class="player5 palyer"></div>
  </div>
  <div class="group group2">
    <div class="player6 palyer"></div>
    <div class="player7 palyer"></div>
    <div class="player8 palyer"></div>
    <div class="player9 palyer"></div>
    <div class="player10 palyer"></div>
  </div>
  <div class="center"><img src="../assets/dnf.jpg"></div>
</div>
  <div class="matrix">
    <div class="border border1"></div>
  <div class="border border2"></div>
  </div>
  <div class="button">确认</div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
  data() {
    return {

    };
  },
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },
  // computed:mapState({
  //   count:state=>state.count
  // }),
  computed:{
    ...mapState(['count']),
    // count(){
    //  return this.$store.getters.count
    //   }
    //...mapGetters(['count'])
    },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
};
</script>

<style scope>
/* .van-button{
  margin-left: 10px;
} */
.king{
    position: relative;
    height: 25rem;
    width: 100%;
    background: 
      radial-gradient(circle, #ccc, #161d4f 85%);
  }
.player-layout{
  position: relative;
  height: 8rem;
  width: 100%;
  background: 
    linear-gradient(to right, #212f46, #212f4670, #212f46);
  top: 50%;
  transform: translate(0,-50%);
  z-index: 10;
}
.center{
  position: absolute;
  height: 8rem;
  width: 8rem;
  top: 50%;
  left: 50%;
  transform: 
    translate(-50%, -50%) rotate(45deg);
  background: 
    linear-gradient(90deg, #212f46, #5b99ff);
  border: .3rem solid #55a9ef;
  box-shadow: 0px 0px .8rem #88c0f0;
  padding: .2rem;
}
.center img{
  width: 100%;
  height: 100%;
}
.group{
  position: relative;
  width: calc((100% - 13rem)/2);
  top: 50%;
  transform: translate(0, -50%);
}
.group1{
  text-align: right;
  float: left;
}
.group2{
  text-align: left;
  float: right;
}
.palyer{
  position: relative;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  margin:0 1.8rem 0 1.8rem;
  background: url('../assets/dnf.jpg');
  background-size: cover;
  border: .3rem solid #55a9ef;
  box-shadow: 0px 0px .8rem #88c0f0;
  color:#fff;
}  
.player::before,.player::after {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: -8%;
  box-shadow: inset 0 0 0 .3rem;
  animation: clipMe 6s linear infinite;
}
.player::before {
  animation-delay: -3s;
}
@keyframes clipMe {
  0%,
  100% {
    clip: rect(0, 4.8rem, 4.8rem, 4.3rem);
  }
  25% {
    clip: rect(0px, 4.8rem, .3rem, 0);
  }
  50% {
    clip: rect(0, .3rem, 4.8rem, 0);
  }
  75% {
    clip: rect(4.3rem, 4.8rem, 4.8rem, 0rem);
  }
}
.group::before, .group::after{
  position: absolute;
  content: '';
  background: linear-gradient(to right,#212f4602, #7499d7, #212f4602);
  height: .3rem;
  width: 10rem;
}
.group::before{
  top: -1.5rem;
}
.group::after{
  bottom: -1.5rem;
}
.group1::before{
  right: 0;
}
.group1::after{
  right: 5rem;
}
.group2::after{
  left: 5rem;
}
.matrix{
  position: absolute;
  height: 16.7rem;
  width: 16.7rem;
  /* background: #008cf4; */
  top: 50%;
  left: 50%;
  transform: 
    translate(-50%, -50%) rotate(45deg);
  z-index: 1;
  border:.1rem solid #7499d7;
  padding: .4rem;
} 
.border{
  position: absolute;
  height: 16.7rem;
  width: 16.7rem;
  text-align: center;
}
.border::before,.border::after{
  position: absolute;
  display: block;
  width: 100%;
  height: 2.5rem;
  color: #fff;
  background: 
    linear-gradient(to top,#212f4602, #7499d7);
    animation: text-an 1.5s linear infinite;
}
@keyframes text-an {
  0%{
    text-shadow: 0 0 0 #ffffff;
  }
  100% {
    text-shadow: 0 -6rem .4rem #ffffff10;
  }
}
.border1::before{
  content: '     动 画 效 果     ';
}
.border1::after{
  bottom: 0;
  content: '     动 画 效 果     ';
  transform: rotate(180deg);
}
.border2{
  transform: rotate(90deg);
}
.border2::before{
  content: '     动 画 效 果     ';
}
.border2::after{
  bottom: 0;
  content: '     动 画 效 果     ';
  transform: rotate(180deg);
} 
.button{
  position: relative;
  background: #3e3a31;
  width: 6.5rem;
  height: 2rem;
  line-height: 2rem;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  text-align: center;
  cursor: pointer;
}
.button::before,.button::after{
  position: absolute;
  content: '';
  display: inline-block;
  width: 0; 
  height: 0;
  border-width: 1.43rem;
  border-style: solid;
  border-color:
    #3e3a31 
    transparent 
    transparent  
    transparent;
}
.button::before{
  transform: rotate(-135deg);
  left: -1.40rem;
  top: -1.42rem;
}
.button::after{
  transform: rotate(135deg);
  right: -1.43rem;
  top: -1.43rem;
}
.bodrder{
  position: absolute;
  color:#fff; 
  top:50%;
  transform: translate(0,-50%);
}
</style>
