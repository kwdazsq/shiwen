import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/Frame/Headers'
import Aside from '@/components/Frame/Aside'
import Home from '@/components/HomePage/home'
import Data from '@/components/HomePage/Details/Data'
import LeftNav from '@/components/Frame/LeftNav'
import Indexs from '@/components/HomePage/indexs'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:"/",
			name:"home",
			component:Home,
			redirect:"/data",
			children:[
				{
					path:"/data",
					name:"首页",
					components: {
						default: Data,
						headers: Headers,
						aside: Aside
					},
				},
			]
		},
		{
			path:"/indexs",
			name:"indexs",
			component:Indexs,
			redirect:"/indexs/data",
			children:[
				{
					path:"/indexs/data",
					name:"首页",
					components: {
						default: Data,
						headers: Headers,
						aside: LeftNav
					},
				},
			]
		},
	]
})
