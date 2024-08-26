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
            pageIcon: '/Icons/throne.png',
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
    },
    {
        path: '/champions',
        name: 'Champions',
        meta: {
            title: 'F1 Champions',
        },
        component: () => import('@/views/Champions.vue'),
    },
    {
        path: '/space',
        name: 'Space',
        meta: {
            title: 'Space and Beyond',
        },
        component: () => import('@/views/Space.vue'),
    },
    {   // This is a catch all route in case none of the above matches, it will redirect to the home page (instead of 404 page)
        path: '/catchAll(.*)*',
        redirect: { name: 'Home'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes, // You need to pass your defined routes here
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}` ?? `Default Title`

    const pageIcon = document.getElementById('pageIcon');
    if (pageIcon && to.meta.pageIcon) {
        pageIcon.href = to.meta.pageIcon;
    }
    next()
})

export default router
