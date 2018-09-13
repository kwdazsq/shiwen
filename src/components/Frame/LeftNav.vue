<template>
  <!--左侧导航-->
  <div :class="{showSidebar:!collapsed}">
    <!--展开折叠开关-->
    <div class="menu-toggle" @click.prevent="collapse">
      <i class="iconfont el-icon-error" v-show="!collapsed" title="收起"></i>
      <i class="iconfont el-icon-success" v-show="collapsed" title="展开"></i>
    </div>
    <!--导航菜单-->
    <el-menu class="el-menu-vertical-demo" :collapse="collapsed">
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
        </el-menu-item>
        <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">个人主页</span>
        </el-menu-item>
        <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">退出登录</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'LeftNav',
    data () {
      return {
        collapsed: false,
      }
    },
    methods: {
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      jumpTo(url){
        this.$router.push(url); //用go刷新
      }
    },
    watch: {
      '$route': function(to, from){ // 路由改变时执行
        //console.info("to.path:" + to.path);
      }
    }
  }
</script>

