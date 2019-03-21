<!-- 应用根组件 -->

<template>
	<div>
    <!-- 路由匹配到的组件将显示到这里 -->
		<router-view/>
    <!-- 使用v-show去掉登录注册页面的底部菜单栏 -->
    <Footer v-show='$route.meta.showFooter'></Footer>   
	</div>
</template>

<script>
  import Footer from './components/footer/footer.vue'
  export default{
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>