// import App from 'App.vue';

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import { Tab}
// import HomePage from "../Pages/Home/HomePage.vue"
import HomePage from "../Pages/Home/HomePage.vue"
// import AppVue from
import ToDoListDetailRouterOutlet from "../Pages/ToDoList/ToDoListDetailRouterOutlet.vue"
import ToDoListDetail from "../Pages/ToDoList/ToDoListDetail.vue"
import Tabs from "../components/Tabs.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: ToDoListDetailRouterOutlet,
    children: [
        {
            path: '',
            redirect: '/todo/add'
        },
        {
            path: 'add',
            name: 'Todo.Add',
            component: ToDoListDetail
        },
        {
            path: 'edit/:id',
            name: 'Todo.Edit',
            component: ToDoListDetail
        }
    ]
  },
{
    path: '/tabs/',
    component: Tabs,
    children: [
        {
            path: '',
            redirect: '/tabs/all'
        },
        {
            path: 'all',
            component: () => import('@/views/TabAll.vue')
        },
        {
            path: 'all/add',
            name: 'add.todo',
            component: () => import('@/views/TabAllDetail.vue')
        },
        {
            path: 'all/edit/:id',
            name: 'edit.todo',
            component: () => import('@/views/TabAllDetail.vue')
        },
        {
            path: 'profile',
            component: () => import('@/views/TabProfile.vue')
        }
    ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
