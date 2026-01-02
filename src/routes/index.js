import { createMemoryHistory, createRouter } from 'vue-router'

import appLayout from '@/layouts/app.vue'
import home from '@/pages/home.vue'

const routes = [
  { 
    path: '/', 
    redirect: 'home',
    component: () => import("../layouts/app.vue"),
    children: [
        {
            path: "/home",
            name: "home",
            component: () => import("../pages/home.vue"),
        },
        {
            path: "/analytics",
            name: "analytics",
            component: () => import("../pages/home.vue"),
        },
        {
            path: "/reports",
            name: "reports",
            component: () => import("../pages/home.vue"),
        },
        {
            path: "/tasks",
            name: "tasks",
            component: () => import("../pages/home.vue"),
        },
        {
            path: "/messages",
            name: "messages",
            component: () => import("../pages/home.vue"),
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import("../pages/home.vue"),
        },
    ]
 },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})