import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/Home'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('../components/index/Index'),
            },

            {
                path: '/library',
                name: 'Library',
                component: () => import('../components/library/LibraryIndex'),
            },
            {
                path:'/mybook',
                name: 'Mybook',
                component:() =>import('../components/MyBooks/mybook')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
