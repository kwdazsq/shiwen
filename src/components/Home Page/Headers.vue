<template>
	<div class="header">
		<div class="wrap">
			<div class="logo">
	            		<a href="#">
	            			<img src="../../assets/logo.png">
	            		</a>
	            		<p>[ 用心创作快乐 ]</p>
	        	</div>
	        	<div class="search">
	            		<el-input  placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input10"  clearable>
                                               </el-input>
	        	</div>
	        	<a class="about" href="/" target="_blank">
	        		<img src="../../assets/1.png">
	            		<p>点这里,了解创之</p>
	        	</a>
	  	</div>
	  	<div class="section">
		<div class="filter">
		               <div class="container">
		               		<ul>
		               			<li  class="hot">
		               				<i></i><p>热门</p>
		               			</li>
		               			<li class="new">
		               				<i></i><p>最新</p>
		               			</li>
		               			<li class="selector">
		               				<em></em>
		               			</li>
		               		</ul>

		               </div>
            		</div>
            		<div class="site-nav">
	                	<div class="head"><p>导航</p></div>
	                	<div class="site-list">
	                		<ul>
	                			<li >
	                				<a href="/" class="site">
		                        				<img src="../../assets/5.png">
		                        				<p>TECH2IPO/创见</p>
	                    				</a>
	                			</li>
	                			<li  >
	                				<a href="/" class="site">
	                					<img src="../../assets/6.png">
	                					<p>五十度硅</p>
	                				</a>
	                			</li>
	                			<li >
	                				<a href="/" class="site">
		                        				<img src="../../assets/7.png">
		                        				<p>第四能源</p>
	                    				</a>
	                			</li>
	                		</ul>
	                	</div>
	            	</div>
  	</div>
  	</div>
</template>
<script>
	export default {
  		name: 'headers',
  		data () {
    			return {
    				input10: ''
    			}
  		}
}
</script>
<style scoped>
.header {
    	width: 100%;
    	height: 100%;
    	padding-left: 60px;
    	left: 0;
    	top: 0;
                position: fixed;
}
.wrap {
	width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);
}
.logo {
	width: 250px;
    height: 100%;
    padding: 14px 20px 6px;
    float: left;
}
.logo a {
	    display: inline-block;
    width: 36%;
    float: left;
}
.logo img {
	    width: 66px;
    height: 36px;
}
.logo p {
	display: inline-block;
    width: 50%;
    text-align: left;
    font-size: 12px;
    color: #aaa;
    vertical-align: top;
    margin-top: 18px;
}
.search {
	height: 100%;
    	max-width: 270px;
    	min-width: 250px;
    	width: 30%;
    	padding: 13px 30px ;
    	margin-left: 60px;
    	float: left;
}
.search el-input   {
	position: relative;
	height: 35px;
}
.about {
	display: inline-block;
    height: 100%;
    padding: 10px 90px;
    cursor: pointer;
    float: right;
    opacity: .8;
}
.about img {
	display: inline-block;
    height: 30px;
    background-size: 30px;
    margin-top: 8px;
}
.about  p {
	display: inline-block;
    line-height: 50px;
    font-size: 14px;
    font-weight: 900;
    color: #999;
    vertical-align: top;
}
.section {
	left: 0;
        	width: 250px;
    	height: 100%;
    	padding: 0px 20px;
    	background: #fafafa;
}
.filter {
	width: 100%;
    	padding: 30px 0;
}
.container {
	position: relative;
    	width: 100%;
}
.hot {
	position: relative;
    	display: block;
    	width: 100%;
    	height: 60px;
    	padding: 5px 0 5px 22px;
    	text-align: left;
    	z-index: 10;
}
.container i {
	background: url(http://qiniu.cdn-chuang.com/platform-hot.png) center no-repeat;
    	background-size: 24px;
    	height: 50px;
    	width: 50px;
    	float: left;
}
.container p {
	display: inline-block;
    height: 100%;
    line-height: 50px;
    font-size: 14px;
    font-weight: 900;
    text-align: left;
    float: left;
}
.new {
	position: relative;
    display: block;
    width: 100%;
    height: 60px;
    padding: 5px 0 5px 22px;
    text-align: left;
    z-index: 10;
}
.selector {
	position: absolute;
    display: block;
    top: 0;
    width: 110px;
    height: 40px;
    padding: 10px 15px;
}
.selector em {
	display: block;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #fff;
}
.site-nav {
	width: 100%;
    border-top: 1px solid #f0f0f0;
}
.head {
	width: 100%;
    text-align: left;
    white-space: nowrap;
}
.head p {
	display: inline-block;
    line-height: 30px;
    font-size: 12px;
    color: #ccc;
    vertical-align: top;
}
.site-list {
	width: 100%;
    padding: 16px 0;
    text-align: center;
}
.site {
	position: relative;
    display: inline-block;
    height: 30px;
    width: 180px;
    padding: 8px 20px;
    margin-bottom: 14px;
    overflow: hidden;
}
.site-list li {
    float: left;
    display: block;
}
.site-list img {
    	height: 100%;
    	float: left;
}
.site p {
	display: inline-block;
    line-height: 30px;
    font-size: 12px;
    color: #999;
    float: left;
    padding: 0px 15px;
}
</style>
