//路由文件

import Vue from 'vue'
import vueRouter from 'vue-router'
import index from '../pages/index/index.vue'
import order from '../pages/order/order.vue'
import person from '../pages/person/person.vue'
import search from '../pages/search/search.vue'
import login from '../pages/Login/login.vue'

Vue.use(vueRouter)

export default new vueRouter({
	routes:[
		{
			path:'/',
			redirect:'/index',
			meta:{
				showFooter:true
			}
		},
		{
			path:'/index',
			component:index,
			meta:{
				showFooter:true
			}
		},
		{
			path:'/order',
			component:order,
			meta:{
				showFooter:true
			}
		},
		{
			path:'/person',
			component:person,
			meta:{
				showFooter:true
			}
		},
		{
			path:'/search',
			component:search,
			meta:{
				showFooter:true
			}
		},
		{
			path:'/login',
			component:login
		}
	]
})
