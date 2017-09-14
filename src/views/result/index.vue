<template>

    <div class="opts">
    <p><img src="../../imgs/btn-intr.png" alt=""></p>
    <h1 style="font-size: 28px;margin-top: 10%;">{{opt.name}}</h1>
    <p>您适合的专业:{{opt.majors}}</p>
    <div style="color:#6EACC5;">{{opt.character}}</div> 
    <p>{{opt.shareTxt}}</p>
    <div class="hert"><img src="../../imgs/seal.png" alt=""></div>
    </div>

</template>
<script>
  export default {
  	data:function(){
  		return {
  			opt:''
  		}
  	},
  	created:function(){
  		this.$http.get('../../src/service/school_list.json').then((opt)=>{
  			this.opt=opt.data[this.random()]
  		})
  	},
  	methods:{
  		random(min=0,max=11){
  			let str=Math.floor(Math.random()*(max-min));
  			if(str<10){
  				str='0'+str
  			}
  			return 'school'+str
  		}
  	}
  }
</script>
<style scoped>
 .opts{
  width: 100%;
  height: 100%;
  line-height: 30px;
  font-size: 22px;
  color:#6EACC5;
  font-weight: 900;
  text-align: center;
  position: relative;
 }
 .hert{
  width: 160px;
  height: 160px;
  position: absolute;
  bottom:5%;
  right: 10%;
 }
 .hert img{
  width: 100%;
  height: 100%;
 }
</style>