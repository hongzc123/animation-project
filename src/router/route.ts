import { RouteRecordRaw } from 'vue-router'

import Home from '../views/home/index.vue'
import Gsap1 from '../gsap/gsap1.vue'
import Gsap2 from '../gsap/gsap2.vue'
import Gsap4 from '../gsap/gsap4.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/gsap',
        name: 'gsap',
        component: Gsap1
    },
    {
        path: '/gsap2',
        name: 'gsap2',
        component: Gsap2
    },
    {
        path: '/gsap4',
        name: 'gsap4',
        component: Gsap4
    }
]

export default routes