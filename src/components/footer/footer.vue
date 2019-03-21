<template>
	<div>

	<footer class="footer_guide">
    <div href="javascript:;" class="guide_item" @click="goTo('/index')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/person')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>

  </div>
</template>

<script>
	export default {
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	// top-border-1px属性需要从mixins.styl中读取
	@import "../../assets/stylus/mixins.styl"
	.footer_guide{
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    }
    .guide_item{
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      }
      &.on{
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        }
        .iconfont{
          font-size 22px
        }
</style>