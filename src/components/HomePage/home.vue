<template>
    <el-row class="container">
        <!-- 左侧导航 -->
        <router-view name="aside"></router-view>
        <!-- 右侧内容区 -->
        <section class="content-container">
            <div class="grid-content bg-purple-light">
                <!-- 头部 -->
                <el-col :span="24">
                    <router-view name="headers"></router-view>
                </el-col>
                <!-- 主体内容 -->
                <el-col :span="24" class="main">
                      <router-view></router-view>
                </el-col>
            </div>
        </section>
        
    </el-row>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            loading: false
        }
    }
}
</script>
