import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/HomePage/Headers'
import Aside from '@/components/HomePage/Aside'
// import Individual from '@/components/HomePage/homepage/Individual'

Vue.use(Router)

export default new Router({
	routes: [
  // 		{
		//       	path: '/HomePage',
		//       	name: 'Headers',
		//       	component: Headers
		// },
		{
    		path:"/HomePage",
    		name:"Aside",
    		component:Aside,
    		redirect:"/HomePage/homepage/Individual",
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
