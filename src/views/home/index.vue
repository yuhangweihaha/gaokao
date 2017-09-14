<template>
	<div class="home">
		<div class="box">
      <h1 class="this-is-a-p"></h1>
      <router-link :to="{name:'question',params:{step:1},query:{type:1}}"><div class="f-like"></div></router-link>
      <router-link :to="{name:'question',params:{step:1},query:{type:0}}"><div class="f-wenke"></div></router-link>
      <div class="left"> <img src="../../imgs/home-left-hand.png" alt=""></div>
      <div class="right"><img src="../../imgs/home-right-hand.png" alt=""></div>
      <div class="shi"><img src="../../imgs/home-icon-1.png" alt=""></div>
      <div class="fou"><img src="../../imgs/home-icon-2.png" alt=""></div>    
	   </div>
  </div>
</template>
<style>
  .home{
  	width:100%;
  	height: 100%;
  }
  .box{
      width: 80%;
      height:85%;
      background: url('../../imgs/home-pepole.png') no-repeat center top;
      background-size: 100% 85%;
      margin: 0 auto;
      overflow: hidden;
  }
   .f-like,.f-wenke{
      position:absolute;
      top:41%;
      width:30%;
      height:1rem;
  }
  .f-like{
    left:14%;
    width:36%;
    background: url('../../imgs/f-like.png') no-repeat center center;
    background-size:contain;
  }
  .f-wenke{
    right:11%;
    background: url('../../imgs/f-wenke.png') no-repeat center center;
    background-size:contain;
  }
   .this-is-a-p{
      width: 300px;
      height: 167px;
      background: url('../../imgs/home-title.png') no-repeat;
      background-size: 182px 90px;
      margin: 57px 64px;
  }
   .left{
      position: absolute;
      left: 0;
      top: 52%;
  }
  .right{
      position: absolute;
      right: 0;
      top: 50%;
  }
  .shi img,.fou img{
  	  width: 100%;
      height:100%;
  }
  .shi{
  	  position: absolute;    
      width: .7rem;
      height: .7rem;
  	  left: 20%;
      bottom: 12%;
  }
  .fou{
  	  position: absolute;
      right: 20%;
      bottom: 10%;
      width: .6rem;
      height: .6rem;
  }
 
</style>