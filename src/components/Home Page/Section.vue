<!-- <template>
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
</template>
<script>
	export default {
  		name: 'section',
  		data () {
    			return {
    			}
  		}
}
</script>
<style scoped>
.section {
	    position: absolute;
    left: 0;
    top: 0;
    width: 160px;
    height: 100%;
    padding: 55px 80px;
    background: #fafafa;
    z-index: 8;
    margin: 0;
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
 -->
.aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    z-index: 10;
    background: #fff;
    border-right: 1px solid #f6f6f6;
    overflow: hidden;
    transition: width .4s;
    -moz-transition: width .4s;
    -webkit-transition: width .4s;

}
.login{
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 25px;
}
.login a {
    display: block;
    padding: 10px 0 10px 10px;
    line-height: 25px;
    text-align: left;
    white-space: nowrap;
}
.login i {
    display: none;
    display: inline-block;
    border: 1px solid #999;
    border-radius: 50%;
    background-size: 160px;
}
.login span {
    font-style: inherit;
    line-height: 45px;
    vertical-align: top;
    margin-left:15px;
    font-size: 14px;
    white-space: nowrap;
}
.menu-top {
    width: 100%;
        height: 5%;
}
.menu {
    height: 60%;
}
.item-top {
    width: 100%;
    height: 5%;
}
.menu a {
    display: block;
    padding: 3px 0 0 20px;
    line-height: 25px;
    text-align: left;
    white-space: nowrap;
    overflow: visible;
}
.menu img {
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
    transition: transform .2s;
    -moz-transition: -moz-transform .2s;
    -webkit-transition: -webkit-transform .2s;
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
.article {
    background-size: 140px;
    background-position: -82px -32px;
}
.folder {
    background-size: 126px;
    background-position: 1px -59px;
}
.setting {
    background-size: 130px;
    background-position: -38px 0;
}
.people {
    background-size: 126px;
    background-position: 0 1px;
}
.menu span {
    display: inline-block;
    line-height: 20px;
    vertical-align: top;
    margin-left: 20px;
    font-size: 14px;
    white-space: nowrap;
    transition: transform .2s;
    -moz-transition: -moz-transform .2s;
    -webkit-transition: -webkit-transform .2s;
}
.bottom {
    position: absolute;
    height: 24%;
    max-height: 150px;
    bottom: 0;
}
.entry {
    position: absolute;
    bottom: 40px;
    height: 60%;
}
.logout {
position: absolute;
    bottom: 26%;
    width: 100%;
}
.logout span {
    display: inline-block;
    line-height: 20px;
    vertical-align: top;
    margin-left: 20px;
    font-size: 14px;
    white-space: nowrap;
    transition: transform .2s;
    -webkit-transition: -webkit-transform .2s;
}
.exit {
    background-size: 136px;
    background-position: -82px 0;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
    transition: transform .2s;
    -moz-transition: -moz-transform .2s;
    -webkit-transition: -webkit-transform .2s;
}
.switch {
    position: absolute;
    bottom: 0;
    height: 40px;
    background: #ddd;
    text-align: center;
    padding: 10px;
    cursor: pointer;
}
.arrow {
    display: inline-block;
    line-height: 40px;
    width: 20px;
    height: 20px;
    background: url(http://qiniu.cdn-chuang.com/navleft-new-0.png) -116px 0 no-repeat;
    background-size: 136px;
}
