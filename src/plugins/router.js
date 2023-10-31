import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home',
        },
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/thrones',
        name: 'Thrones',
        meta: {
            title: 'Thrones',
        },
        component: () => import('@/views/Thrones.vue'),
    },
    {
        path: '/mountains',
        name: 'Mountains',
        meta: {
            title: 'Mountains',
        },
        component: () => import('@/views/Mountains.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes, // You need to pass your defined routes here
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}` ?? `Default Title`
    next()
})

export default router
