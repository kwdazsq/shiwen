<template>
    <div class="container">
        <div class="content">
            <!-- 左侧导航 -->
            <router-view name="aside"></router-view>
            <!-- 右侧内容区 -->
            <div class="right">
                <!-- 头部 -->
                <div class="right-headers">
                    头部
                    <!-- <router-view name="headers"></router-view> -->
                </div>
                <!-- 主体内容 -->
                <div class="right-main">
                      <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
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
<style scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.container .content {
  display: -ms-flexbox;
  display: flex;
  position: absolute;
}
</style>
