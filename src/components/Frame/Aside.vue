<template>
    <aside :class="{showSidebar:!collapsed}">
        <el-menu class="el-menu-vertical-demo" :collapse="collapsed">
            <el-menu-item class="element" index="1">
                <img src="../../assets/3.png" class="login">
                <span slot="title" class="login-regist">登录/注册</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <img class="home" src="../../assets/4.png">
                <span slot="title">平台首页</span>
            </el-menu-item>
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
        <div class="menu-toggle" @click.prevent="collapse">
            <i class="el-icon-d-arrow-right" v-show="!collapsed" title="收起"></i>
            <i class="el-icon-d-arrow-left" v-show="collapsed" title="展开"></i>
        </div>
    </aside>
</template>
<script>
export default {
    name: 'Aside',
    data() {
        return {
            collapsed: true
        };
    },
    methods: {
        collapse: function() {
            this.collapsed = !this.collapsed;
        }
    }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
}

.el-menu-vertical-demo .element {
    margin-bottom: 35px;
}

.el-menu-vertical-demo .element .login {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: -10px;
}

.el-menu-vertical-demo .home {
    background-size: 130px;
    background-position: -2px -32px;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
}

.el-menu--collapse {
    width: 59px;
}

.showSidebar .menu-toggle {
    width: 150px;
}

.menu-toggle {
    border-right: solid 1px #e6e6e6;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    width: 59px;
    position: fixed;
    bottom: 0;
}
</style>