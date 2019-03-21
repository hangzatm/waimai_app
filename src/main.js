
// 在main.js中导入路由文件，并在实例中添加router属性，就会产生router-view，router-link标签，$router,$route属性

import Vue from 'vue'
import app from './app'
import router from './router'

new Vue({
	el:'#app',
	render:h=>h(app),
	router
})