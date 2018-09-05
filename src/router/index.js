import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/Home Page/Headers'
import Aside from '@/components/Home Page/Aside'
// import Individual from '@/components/Home Page/homepage/Individual'

Vue.use(Router)

export default new Router({
	routes: [
  // 		{
		//       	path: '/Home Page',
		//       	name: 'Headers',
		//       	component: Headers
		// },
		{
    		path:"/Home Page",
    		name:"Aside",
    		component:Aside,
    		redirect:"/Home Page/homepage/Individual",
    		// children:[
	    	// 	{
	    	// 		name:"Individual",
	    	// 		path:"Individual",
	    	// 		component:Individual
	    	// 	},
    		// ]
    	},
  	]
})
