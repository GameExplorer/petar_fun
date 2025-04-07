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
        path: '/game_of_thrones',
        name: 'Game of Thrones',
        meta: {
            title: 'Game of Thrones',
            pageIcon: '/Icons/throne.png',
        },
        component: () => import('@/views/Thrones.vue'),
    },
    {
        path: '/mountains',
        name: 'Mountains',
        meta: {
            title: 'Mountains',
            pageIcon: '/Icons/mountain.svg',
        },
        component: () => import('@/views/Mountains.vue'),
    },
    {
        path: '/f1_construstor_champions',
        name: 'F1 Champions',
        meta: {
            title: 'F1 Champions',
            pageIcon: '/Icons/formula.svg',
        },
        component: () => import('@/views/Champions.vue'),
    },
    {
        path: '/space',
        name: 'Space',
        meta: {
            title: 'Space and Beyond',
            pageIcon: '/Icons/space.svg',
        },
        component: () => import('@/views/Space.vue'),
    },
    {
        path: '/life_in_weeks',
        name: 'Life in Weeks',
        meta: {
            title: 'Life in Weeks',
            pageIcon: '/Icons/leaf.svg',
        },
        component: () => import('@/views/Life.vue'),
    },
    {
        path: '/iWantToBeBillionaire',
        name: 'I Want to be a Billionaire',
        meta: {
            title: 'I Want to be a Billionaire',
            pageIcon: '/Icons/leaf.svg',
        },
        component: () => import('@/views/IWantToBeBillionaire.vue'),
    },
    {
        path: '/history_of_the_programming_languages',
        name: 'Programming Languages',
        meta: {
            title: 'History of the Programming Languages',
            pageIcon: '/Icons/leaf.svg',
        },
        component: () => import('@/views/ProgrammingLanguages.vue'),
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
