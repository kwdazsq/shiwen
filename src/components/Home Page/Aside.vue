<template>
	<div class="aside">
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  </el-submenu>

  <el-menu-item class="element" index="1" >
    <img src="../../assets/3.png" class="login">
    <span slot="title" class="login-regist">登录/注册</span>
</router-link>
  </el-menu-item>

  <el-menu-item index="2" >
    <img class="home" src="../../assets/4.png">
    <span slot="title">平台首页</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">文章管理</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">我的收藏</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">个人设置</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">个人主页</span>
  </el-menu-item>

  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">退出登录</span>
  </el-menu-item>

</el-menu>
<el-radio-group v-model="isCollapse" class="switch">
  <el-radio-button :label="false"><i class="arrow"  ></i>,</el-radio-button><br/>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
</div>
</template>
<script>
	export default {
  		name: 'aside',
  		data () {
    			return {
    				isCollapse: true
		      };
		    },
}
</script>
<style scoped>
.aside {
	position: fixed;
    width:160px;
    height: 100%;
    z-index: 10;
}
.login{
	display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: -10px;
}
.home {
background-size: 130px;
    background-position: -2px -32px;
     width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
}
.arrow {
	display: inline-block;
    line-height: 40px;
    width: 20px;
    height: 20px;
    background: url(http://qiniu.cdn-chuang.com/navleft-new-0.png) -116px 0 no-repeat;
    background-size: 136px;
}
.switch {
	position:fixed;
	bottom: 0px;
	left: 0px;
}
.element {
    margin-bottom: 35px;
}
.el-menu--collapse {
    width: 59px;
    height: 100%;
    padding: 20px 0;
}
.el-menu {
    padding: 20px 0;
}
</style>


