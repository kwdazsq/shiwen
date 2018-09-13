import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/Frame/Headers'
import Aside from '@/components/Frame/Aside'
import Home from '@/components/HomePage/home'
import Data from '@/components/HomePage/Details/Data'

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
		]
})
