import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/thrones',
        name: 'Thrones',
        component: () => import('@/views/Thrones.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes, // You need to pass your defined routes here
})

export default router
