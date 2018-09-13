import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/Frame/Headers'
import Aside from '@/components/Frame/Aside'
import Home from '@/components/HomePage/home'
import Datas from '@/components/HomePage/Details/Datas'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:"/",
			name:"home",
			component:Home,
			redirect:"/datas",
			children:[
				{
					path:"/datas",
					name:"首页",
					components: {
						default: Datas,
						headers: Headers,
						aside: Aside
					},
				},
			]
		},
	]
})
