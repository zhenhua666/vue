import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Mall',
            component:()=>import('./components/Mall'),
            redirect:'/home',
            children:[
                {   
                    path:'/home',
                    name:'Home',
                    component:()=>import('./components/home'),
                },
                {   
                    //path:'/search/:newsId(\\d+)/:newsTitle',
                    path:'/search',
                    name:'Search',
                    component:()=>import('./components/search'),
                    beforeEnter:(to,from,next)=>{
                        //console.log(to);
                        //console.log(from);
                        next();//next(true);next(false);next({'/home'}) 不写next会拦截路由的跳转
                    }
                },
                {   
                    path:'/user',
                    name:'User',
                    component:()=>import('./components/user'),
                },
                {   
                    path:'/set',
                    name:'Set',
                    component:()=>import('./components/set'),
                },
                {
                    path:'demo',
                    name:'Name',
                    component:()=>import('./components/demo'),
                }
            ]
        },
        {
            path:'*',
            component:()=>import('./components/Error')
        }
    ]
})