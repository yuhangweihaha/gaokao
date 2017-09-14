import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router/index.js';

Vue.prototype.$http=axios;

import Vuex from 'vuex';
Vue.use(Vuex);

let store=new Vuex.Store({
	state:{
		question:null,
		selected_question:[]
	},
	mutations:{
		set_question:function(state,data){
			state.question=data
		},
		set_selected_question:function(state,type){

			let arr=[];
			let {question}=state;

			function getFore(arr){
	            let brr=[];
	            for(let i=0;i<4;i++){
	              let tmp=random(0,arr.length);
	              if(brr.indexOf(tmp)==-1){
	                brr.push(tmp)
	              }else{
	                i--;
	              }
	            }
	            return [arr[brr[0]],arr[brr[1]],arr[brr[2]],arr[brr[3]]]
	        }
	        function random(min,max){
	            return Math.floor(Math.random()*(max-min))
	        }

			if(type=='liberal'){				
				Object.values(question).forEach((val,idx)=>{
					if(val.type!==1){
						arr.push(val)
					}
				})

			}
			if(type=='science'){
				Object.values(question).forEach((val,idx)=>{
					if(val.type==1 || val.type==2){
						arr.push(val)
					}
				})
			}
			
			state.selected_question = getFore(arr);
		}
	},
	actions:{
		get_question:function({commit},data){
			commit('set_question',data)
		}
	},
	getters:{
		get_questions:function(){

			
		}
	}
})
new Vue({
  el: '#app',
  mounted:function(){
  	this.$http.get('./src/service/question.json').then((res)=>{
  		this.$store.dispatch('get_question',res.data)
  	})
  },
  router,
  store,
  render: h => h(App)
})
