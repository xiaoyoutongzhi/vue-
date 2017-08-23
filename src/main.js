import Vue from 'vue' ;
//引入组件
import App from './App.vue';
import Home from './components/home/Home.vue';
import Vip from './components/vip/Vip.vue';
import shopCart from './components/shopcart/shopCart.vue';
import Search from './components/search/Search.vue';

//引入组件结束

// 配置路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
	 routes :[
	 		{path : '/' , redirect : {name : 'home'}},
	 		{name : 'home',path : '/home',component : Home},
	 		{name : 'vip',path : '/vip',component : Vip},
	 		{name : 'shopcart',path : '/shopcart',component : shopCart},
	 		{name : 'search',path : '/search',component : Search},
	 ]
});
// 配置路由结束

// MintUi 
	import MintUi from 'mint-ui' ;
	import 'mint-ui/lib/style.css';
	Vue.use(MintUi);
// MinUi结束
 
 // Mui 
  import './static/libs/mui-master/dist/css/mui.min.css' ;
 // Mui结束

//Axios 开始
  import Axios from 'axios'
  Vue.prototype.$ajax = Axios ;
  Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/' ;
//Axios 结束



new Vue({
	el : '#app',
	render : c=>c(App),
	router
})
