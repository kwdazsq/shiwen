<template>
	<div class="landing ">
		<div class="landing-style">
			<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1">
  			</el-input>
  			<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
  			</el-input>
		</div>
  	</div>
</template>
<script>
	export default {
  		name: 'landing',
  		data () {
    			return {
    				input1: '',
    				input2: '',
    			}
  		}
}
</script>
<style scoped>
.landing-style {
	background-image: url(../../assets/8.jpeg);
}
</style>
