import { RouteRecordRaw } from 'vue-router'

import Home from '../views/home/index.vue'
import Gsap1 from '../gsap/gsap1.vue'
import Gsap2 from '../gsap/gsap2.vue'
import Gsap3 from '../gsap/gsap3.vue'
import Gsap4 from '../gsap/gsap4.vue'
import ImagePalette from '../components/ImagePalette.vue'
import Resize from '../components/Resize.vue'

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
        path: '/gsap3',
        name: 'gsap3',
        component: Gsap3
    },
    {
        path: '/gsap4',
        name: 'gsap4',
        component: Gsap4
    },
    {
        path: '/imagePalette',
        name: 'ImagePalette',
        component: ImagePalette
    },
    {
        path: '/resize',
        name: 'Resize',
        component: Resize
    }
]

export default routes