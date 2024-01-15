import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import StartHere from './pages/StartHere.vue';
import Courses from './pages/Courses.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/start-here',
            name: 'starthere',
            component: StartHere
        },
        {
            path: '/course',
            name: 'course',
            component: Courses
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        },

    ]
});
export { router };
