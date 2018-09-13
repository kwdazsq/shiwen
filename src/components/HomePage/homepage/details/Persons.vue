<template>
	<div class="persons ">
		<div id="user-nav" class="user-nav">
    <div class="user-nav-container">
        <div class="left">
            <a class="active">文章归档</a>
            <a href="http://chuang.pro/user/favorite">我的收藏</a>
        </div>
    </div>
</div>
<div id="user-content" class="user-content">
    <div class="container">
        <div id="article-list" class="list-container">
           <div class="none">
               <h5>暂无内容</h5>
           </div>

            <a class="load-more">
                <p>
                    <span></span><em></em>
                </p>
            </a>
        </div>
    </div>
</div>
  	</div>
</template>
<script>
	export default {
  		name: 'persons',
  		data () {
    			return {
    			}
  		}
}
</script>
<style scoped>
</style>
